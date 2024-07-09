import React, { useEffect, useState } from 'react'
import { loginUser } from '../redux/reducer/authslice';
import { useSelector } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import Loader from '../components/loader';
import { userProfile } from '../redux/api/auth';

export default function Home() {
  const user = useSelector(loginUser);
  const [loading, setLoading] = useState(false)
  const [Info, setUserInfo] = useState()

  useEffect(() => {
    setLoading(true)
    userProfile(user.token).then((e) => {
      setUserInfo(e.data)
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
      console.log(err, 'the error')
    })
  }, [user])

  return (
    <div>
      <Header user={user.role} />

      {
        loading ? (

          <div className="position-absolute loaderClass">
            <Loader />
          </div>

        ) : (
          <div className=" d-flex justify-content-center  mt-2 " style={{ height: "75vh" }}>
            <div className="card mt-5" style={{ maxWidth: "540px", height: "300px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{Info.firstName} {Info.lastName}</h5>
                    <p className="card-text">Hello {Info.role} welcome back.</p>
                    <p className="card-text"><small className="text-body-secondary">{Info.email}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <Footer />
    </div >
  )
}
