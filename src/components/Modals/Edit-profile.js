import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAction } from '../../redux/actions/authActions'
import API from '../../utils/API'
import './modals.css'

function EditProfile() {
    const userState = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    let [editUser, setEditUser] = useState({
        first: '',
        last: '',
        email: '',
        _id: ''
    })
    let [msg, setMsg] = useState('')
    useEffect(() => {
        setEditUser({
            first: userState.first,
            last: userState.last,
            email: userState.email,
            _id: userState._id
        })
    }, [])
  
    
    const editChange = (e) => {
        let {name,value} = e.target
        setEditUser({
            // this gives access to all the keys in the editUser state through one handler
            ...editUser,
            [name]:value
        })
    }
   //************************************************* */ // 
    const updateProfile = (e) => {
        e.preventDefault()
        for (let input in editUser) {
            if (editUser[input] === '') {
                    editUser[input]= userState[input]
            }
        }
        API.editUser(editUser).then(result => {
            setMsg(result.data.msg)
            dispatch(loginAction(result.data))
            setTimeout(closeModal, 2000)
        })
        
        console.log(editUser)
    }
//*************************************************** */ //
    const openModal = () => {
        // Get the modal
        var modal = document.getElementById('id03'); modal.style.display = 'block';

        // When the user clicks anywhere outside of the modal, it closes
        window.addEventListener('click', function (event) {
            console.log(event.target)
            console.log(modal)
            if (event.target == modal) {
                modal.style.display = "none";
            }
        })
    }

    function closeModal() {
        setMsg('')
        document.getElementById('id03').style.display = 'none'
    }


    return (
        <div>

            <button
                onClick={openModal}
                // className='fa edit-button'
                className='btn btn-primary btn-lg l-s-btns '
                 >
                <i className='fa fa-pencil-alt' style={{paddingRight:"5px"}} />
                EDIT PROFILE
            </button>

            <div id="id03" className="modal">


                <form
                    //***why isnt updateProfile yellow  ?????  *****/
                    onSubmit={updateProfile}
                    //*********************8 */ //
                    className="modal-content animate"
                   >
                    <span
                        onClick={closeModal}
                        className="close"
                        title="Close Modal">
                        &times;
                    </span>

                    {msg.length > 0 ? <div className="container-edit"><h2 style={{ textAlign: 'center' }}>{msg}</h2></div> :
                        <div className="container-edit">

                            <h1>Edit Profile</h1>
                            <p>Please use this form to edit your profile.</p>
                            <hr />

                            <label htmlFor="first"><b>First Name</b></label>
                            <input
                                type="text"
                                name="first"
                                placeholder={`${editUser.first}`}
                                onChange={(e) => editChange(e)}
                            // required
                            />

                            <label htmlFor="last"><b>Last Name</b></label>
                            <input
                                type="text"
                                name="last"
                                placeholder={editUser.last}
                                onChange={(e) => editChange(e)}
                            // required
                            />

                            <label htmlFor="email"><b>Email</b></label>
                            <input
                                type="text"
                                name="email"
                                placeholder={editUser.email}
                                onChange={(e) => editChange(e)}
                            // not required so that email can change
                            // required
                            />
                       

                            <div className="clearfix" >

                                <button
                                    type="submit"
                                    className="signup-btn"
                                    >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="signup-cancel-btn" 
                                    >
                                    Cancel
                                </button>


                            </div>
                       

                        </div>
                    }
                </form>

            </div>
        </div>
    )
}
export default EditProfile