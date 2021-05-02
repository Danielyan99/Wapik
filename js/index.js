const burgerMenu = document.querySelector(".burger-menu")
const overlay = document.querySelector(".overlay")
const burgerContent = document.querySelector(".burger-menu-content")
const ButtonUp = document.querySelector(".button-up")

burgerMenu.addEventListener("click", () => {
  overlay.classList.toggle("active")
  burgerMenu.classList.toggle("active")
  burgerContent.classList.toggle("active")
  document.body.classList.toggle("over")
})
ButtonUp.addEventListener("click", () => {
  window.scroll(0, 0)
})
if (pageYOffset <= 300) {
  ButtonUp.style.display = "none"
} else ButtonUp.style.display = "block"
window.onscroll = () => {
  if (pageYOffset <= 300) {
    ButtonUp.style.display = "none"
  } else ButtonUp.style.display = "block"
}

// Authorization

const authButton = document.getElementById("auth-btn")
const authorization = document.querySelector(".authorization")
const authCloseBtn = document.querySelector(".auth-close__btn")
const authOverlay = document.querySelector(".auth-overlay")

authButton.addEventListener("click", (e) => {
  e.preventDefault()
  authorization.classList.toggle("active")
  document.body.classList.toggle("over")
  authOverlay.classList.toggle("active")
})

authCloseBtn.addEventListener("click", () => {
  authorization.classList.remove("active")
  document.body.classList.remove("over")
  authOverlay.classList.remove("active")
})

authOverlay.addEventListener("click", () => {
  authorization.classList.remove("active")
  document.body.classList.remove("over")
  authOverlay.classList.remove("active")
})

const authLoginBtn = document.getElementById("auth-login-btn")
const authRegistrBtn = document.getElementById("auth-registr-btn")
const authLoginForm = document.getElementById("auth-login-form")
const authRegistrForm = document.getElementById("auth-registr-form")

authLoginBtn.addEventListener("click", () => {
  authLoginForm.classList.add("active")
  authRegistrForm.classList.remove("active")
})
authRegistrBtn.addEventListener("click", () => {
  authLoginForm.classList.remove("active")
  authRegistrForm.classList.add("active")
})

// Validation
let isValid = false
const authFormInputs = document.querySelectorAll(".auth-form-input")

authFormInputs.forEach((item) => {
  item.addEventListener("focusout", () => {
    if (!item.value) {
      item.classList.add("error")
    } else item.classList.remove("error")
  })
})
authFormInputs.forEach((item) => {
  item.addEventListener("focusin", () => {
    const authHint = item.parentElement.querySelector(".auth-item__req-hint")
    if (authHint !== null) {
      authHint.classList.add("active")
    }
  })
  item.addEventListener("focusout", () => {
    const authHint = item.parentElement.querySelector(".auth-item__req-hint")
    if (authHint !== null) {
      authHint.classList.remove("active")
    }
  })
})

const loginSubmitBtn = document.getElementById("login-submit-btn")
const registrSubmitBtn = document.getElementById("registr-submit-btn")
const loginErrorMessage = document.querySelector(".danger-message.login")
const registrErrorMessage = document.querySelector(".danger-message.registr")

const authLoginEmail = document.getElementById("auth-login-email")
const authLoginPass = document.getElementById("auth-login-pass")
const authSuccess = document.querySelector(
  ".authorization-completed-successful"
)
const registrSuccess = document.querySelector(
  ".registration-completed-successful"
)
// authLoginForm, authRegistrForm
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
function validatePassword(pass) {
  if (pass.length > 16 || pass.length < 6) {
    return false
  }
  return true
}
function validateName(name) {
  return name.split("").length < 20 && name.split("").length > 8
}
function validatePhone(num) {
  num = num.split("")
  return num.length === 8 || num.length === 12
}

authLoginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (
    validateEmail(authLoginEmail.value) &&
    validatePassword(authLoginPass.value)
  ) {
    isValid = true
  }
  if (!authLoginEmail.value || !validateEmail(authLoginEmail.value)) {
    authLoginEmail.classList.add("error")
  } else authLoginEmail.classList.remove("error")
  if (!authLoginPass.value || !validatePassword(authLoginPass.value)) {
    authLoginPass.classList.add("error")
  } else authLoginPass.classList.remove("error")

  if (isValid) {
    authorization.classList.remove("active")
    document.body.classList.remove("over")
    authOverlay.classList.remove("active")
    loginErrorMessage.classList.remove("active")
    authSuccess.classList.add("active")
    authLoginEmail.value = ""
    authLoginPass.value = ""
    authRegEmail.value = ""
    authRegPass.value = ""
    authRegConfirmPass.value = ""
    authRegName.value = ""
    authRegPhone.value = ""
    authAgreementCheck.checked = false
    setInterval(() => {
      authSuccess.classList.remove("active")
    }, 3000)
    isValid = false
  } else loginErrorMessage.classList.add("active")
})

const authRegEmail = document.getElementById("auth-reg-email")
const authRegPass = document.getElementById("auth-reg-pass")
const authRegConfirmPass = document.getElementById("auth-reg-confirm__pass")
const authRegName = document.getElementById("auth-reg-name")
const authRegPhone = document.getElementById("auth-reg-phone")
const authAgreementCheck = document.getElementById("agreement-check")

authRegistrForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (
    validateEmail(authRegEmail.value) &&
    validatePassword(authRegPass.value) &&
    authRegConfirmPass.value === authRegPass.value &&
    validateName(authRegName.value) &&
    validatePhone(authRegPhone.value) &&
    authRegName.value &&
    authAgreementCheck.checked
  ) {
    isValid = true
  }
  if (!authRegEmail.value || !validateEmail(authRegEmail.value)) {
    authRegEmail.classList.add("error")
  } else authRegEmail.classList.remove("error")
  if (!authRegPass.value || !validatePassword(authRegPass.value)) {
    authRegPass.classList.add("error")
  } else authRegPass.classList.remove("error")
  if (
    !authRegConfirmPass.value ||
    authRegConfirmPass.value !== authRegPass.value
  ) {
    authRegConfirmPass.classList.add("error")
  } else authRegConfirmPass.classList.remove("error")
  if (!authRegName.value) {
    authRegName.classList.add("error")
  } else authRegName.classList.remove("error")
  if (!authRegPhone.value) {
    authRegPhone.classList.add("error")
  } else authRegPhone.classList.remove("error")

  if (isValid) {
    authorization.classList.remove("active")
    document.body.classList.remove("over")
    authOverlay.classList.remove("active")
    registrErrorMessage.classList.remove("active")
    registrSuccess.classList.add("active")
    authRegEmail.value = ""
    authRegPass.value = ""
    authRegConfirmPass.value = ""
    authRegName.value = ""
    authRegPhone.value = ""
    authAgreementCheck.checked = false
    authLoginEmail.value = ""
    authLoginPass.value = ""
    setInterval(() => {
      registrSuccess.classList.remove("active")
    }, 3000)
    isValid = false
  } else registrErrorMessage.classList.add("active")
})

// Password visibility
const passwordVisibilityIcons = document.querySelectorAll(".password-eye-icon")

passwordVisibilityIcons.forEach((passwordVisibilityIcon) => {
  passwordVisibilityIcon.addEventListener("click", () => {
    const currentPassInput = passwordVisibilityIcon.parentElement.parentElement.querySelector(
      ".auth-form-input"
    )
    if (passwordVisibilityIcon.classList.contains("fa-eye-slash")) {
      passwordVisibilityIcon.classList.remove("fa-eye-slash")
      passwordVisibilityIcon.classList.add("fa-eye")
      currentPassInput.type = "text"
    } else {
      passwordVisibilityIcon.classList.add("fa-eye-slash")
      passwordVisibilityIcon.classList.remove("fa-eye")
      currentPassInput.type = "password"
    }
  })
})

// Team modal window

const teamPersonsBtns = document.querySelectorAll(".team-more__btn")
const teamMoreCloseBtns = document.querySelectorAll(".team-more-close__btn")
const teamMoreOverlay = document.querySelector(".team-person__more-overlay")
const teamMoreModals = document.querySelectorAll(".team-person__more-info")

teamPersonsBtns.forEach((personBtn) => {
  personBtn.addEventListener("click", () => {
    const currentPersonInfo = personBtn.parentElement.parentElement.parentElement.parentElement.querySelector(
      ".team-person__more-info"
    )
    currentPersonInfo.classList.add("active")
    document.body.classList.add("over")
    teamMoreOverlay.classList.add("active")
  })
})

teamMoreCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.remove("active")
    document.body.classList.remove("over")
    document.querySelector(".team-person__more-overlay")
    teamMoreOverlay.classList.remove("active")
  })
})

if (teamMoreOverlay) {
  teamMoreOverlay.addEventListener("click", () => {
    teamMoreModals.forEach((teamModal) => {
      teamModal.classList.remove("active")
    })
    document.body.classList.remove("over")
    teamMoreOverlay.classList.remove("active")
  })
}

// select

const contactSelectOptions = document.querySelectorAll(".contact-select-option")
const contactSelect = document.querySelector(".contact-select__options")
const contactFormSelect = document.querySelector(
  ".contact-form__select .select"
)
const contactFormCurrentSelect = document.querySelector(
  ".contact-form__select .select span"
)
if (contactFormSelect) {
  contactFormSelect.addEventListener("click", () => {
    contactSelect.classList.toggle("active")
  })
}
contactSelectOptions.forEach((option) => {
  option.addEventListener("click", () => {
    contactFormCurrentSelect.textContent = option.innerHTML
    contactSelect.classList.remove("active")
  })
})

// Race Animation

const animationBtn = document.querySelector(".animation-play"),
  raceItems = document.querySelectorAll(".race-item")

if (animationBtn) {
  animationBtn.addEventListener("click", () => {
    raceItems.forEach((item) => {
      item.classList.toggle("run")
    })
    animationBtnCurrentState = animationBtn.querySelector("button")
    if (animationBtnCurrentState.innerHTML === "play animation") {
      animationBtnCurrentState.innerHTML = "stop animation"
    } else animationBtnCurrentState.innerHTML = "play animation"
  })
}

// Site Animation
const animItems = document.querySelectorAll(".anim-item")

if (animItems.length) {
  window.addEventListener("scroll", animOnScroll)
  function animOnScroll() {
    animItems.forEach((anim) => {
      const animHeight = anim.offsetHeight
      const animOffset = offset(anim).top
      const animStart = 4

      let animPoint = window.innerHeight - animHeight / animStart

      if (animHeight > window.innerHeight) {
        animPoint = window.innerHeight - animHeight / window.innerHeight
      }

      if (
        pageYOffset > animOffset - animPoint &&
        pageYOffset < animOffset + animHeight
      ) {
        anim.classList.add("active")
      } else {
        if (!anim.classList.contains("anim-no-effect")) {
          anim.classList.remove("active")
        }
      }
    })
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    }
  }
  animOnScroll()
}
