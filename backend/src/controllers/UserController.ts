// my user
// auth
export { default as signUp } from './UserControllers/auth/signUp'
export { default as signUpEmail } from './UserControllers/auth/signUpEmail'
export { default as repeatSignUpEmail } from './UserControllers/auth/repeatSendSignUpEmail'
export { default as checkEmailCode } from './UserControllers/auth/checkEmailCode'
export { default as signIn } from './UserControllers/auth/signIn'
export { default as isActiveEmailLink } from './UserControllers/auth/isActiveEmailLink'
// recovery
export { default as recoveryByEmail } from './UserControllers/auth/recovery/recoveryByEmail'
export { default as repeatRecoveryByEmail } from './UserControllers/auth/recovery/repeatRecoveryByEmail'
export { default as checkRecoveryEmailCode } from './UserControllers/auth/recovery/checkRecoveryEmailCode'
export { default as recovery } from './UserControllers/auth/recovery/recovery'
//edit
export { default as editProfileInfo } from './UserControllers/edit/editProfileInfo'
export { default as editMainInfo } from './UserControllers/edit/editMainInfo'
export { default as editPassword } from './UserControllers/edit/editPassword'
export { default as editPrivacy } from './UserControllers/edit/editPrivacy'
export { default as editAvatar } from './UserControllers/edit/editAvatar'
//other
export { default as getFullUserData } from './UserControllers/getFullUserData'
export { default as getMyData } from './UserControllers/getMyData'
export { default as delMyProfile } from './UserControllers/delMyProfile'
export { default as logOut } from './UserControllers/auth/logOut'
export { default as refresh } from './UserControllers/auth/refresh'

// other users
// profile
export { default as getProfileData } from './UserControllers/user/profile/getProfileData'
