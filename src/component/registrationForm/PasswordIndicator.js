import React from 'react'
import './registrationsForm.scss'
import zxcvbn from 'zxcvbn';


export function PasswordIndicator({ show, password }) {
   const progress = zxcvbn(password);
   const key = progress.score * 100 / 4

   const getPasswordStrength = () => {

      switch (progress.score) {
         case 0:
            return 'red'
         case 1:
            return '#f44336'
         case 2:
            return '#ffed3b'
         case 3:
            return '#9bc158'
         case 4:
            return '#4caf50'

         default:
            return 'none'
      }
   }



   const changePasswordColor = () => ({
      width: `${key}%`,
      backgroundColor: getPasswordStrength()
   })

   return (
      <>
         {show && (<span className='form__strength' style={changePasswordColor()}
         />)}
      </>
   )
}
