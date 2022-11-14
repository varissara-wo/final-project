export const validateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isEmailValid = emailRegex.test(email);
  return isEmailValid;
};

export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
  const isPasswordValid = passwordRegex.test(password);
  return isPasswordValid;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  const passwordRegex = new RegExp(password);
  const isPasswordValid = passwordRegex.test(confirmPassword);
  return isPasswordValid;
};

export const validateLinkdin = (url) => {
  const linkedinRegex =
    /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gm;
  const isUrlValid = linkedinRegex.test(url);
  return isUrlValid;
};

export const validatePhoneNumber = (number) => {
  const phoneNumberRegex = /^(\+66)(\d{9})$/gm;
  const isPhoneNumberValid = phoneNumberRegex.test(number);
  return isPhoneNumberValid;
};

export const validateExperience = (context) => {
  const experienceRegex = /.{300,2000}/;
  const isExperienceValid = experienceRegex.test(context);
  return isExperienceValid;
};

export const validateEducation = (context) => {
  const educationRegex = /^\w{100,2000}$/;
  const isEducationValid = educationRegex.test(context);
  return isEducationValid;
};

export const validateAbout = (context) => {
  const aboutRegex = /^\w{100,2000}$/;
  const isAboutValid = aboutRegex.test(context);
  return isAboutValid;
};

export const validateCompanyName = (context) => {
  const companyNameRegex = /\w+/;
  const isCompanyNameValid = companyNameRegex.test(context);
  return isCompanyNameValid;
};
