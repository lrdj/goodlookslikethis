
let validateThis = "form.validate-form[validate='true']";

function beginValidation(form) {
// Start off with a bool value and set default
  let validate_bool = Boolean(false);

  const js_forms = document.querySelectorAll(form);

  // Lets loop thru all possible forms in the DOM
  for (const js_form of js_forms) {

    // Disable default html5 validation for all forms on page
    setNoValidate(js_form);

    let required_inputs = js_form.querySelectorAll(".validate-input"),
      select_inputs = js_form.querySelectorAll("select:not(#perdiemSearchVO_fy)"),
      textarea_inputs = js_form.querySelectorAll("textarea"),
      check_boxes = js_form.querySelectorAll(".usa-radio__input[type=radio],.usa-checkbox__input.validate-checkbox[type=checkbox]"),
      check_min_inputs = js_form.querySelectorAll(".js-min_one[type=checkbox]"),
      error_container_class = "usa-form-group--error",
      checked_boxes = document.querySelectorAll('.js-min_one[type="checkbox"]:checked').length,
      check_boxes_min = document.querySelectorAll('.js-min_one[type="checkbox"]'),
      container = document.querySelectorAll('.check-min-one')[0];

    // begin by reseting all values on $load
    jQuery(function() {
      [].forEach.call(required_inputs, function (text_input) {
        text_input.value = ''
      });
      [].forEach.call(select_inputs, function (select_input) {
        select_input.value = ''
      });
      [].forEach.call(textarea_inputs, function (textarea_input) {
        textarea_input.value = ''
      });
      togglecheckboxes();

      function togglecheckboxes() {
        for (let checked_input of check_boxes) {
          checked_input.checked = false
        }
        for (let check_box_min of check_boxes_min) {
          check_box_min.checked = false
        }
      }
    });

    js_form.onsubmit = function submit(event) {
      let not_pass,
        required_inputs = js_form.querySelectorAll(".validate-input"),
        checked_min_boxes = document.querySelectorAll('.js-min_one[type="checkbox"]:checked').length,
        check_boxes_min = document.querySelectorAll('.js-min_one[type="checkbox"]');
      [].forEach.call(required_inputs, function (text_input) {
        let error_msg = text_input.getAttribute("data-error-msg"),
          invalid = text_input.validity.patternMismatch || text_input.validity.valueMissing || text_input.validity.typeMismatch;

        if (!error_msg) {
          error_msg = `This is a required field`;
          console.log(`${text_input.name} is missing the data-error-msg to display error feedback`)
        }

        //console.table(text_input.name + error_msg);

        if (invalid) {
          not_pass = true;
          text_input.closest(".usa-form-group").classList.add(error_container_class);
          text_input.classList.add("usa-input--error");
          text_input.previousElementSibling.innerText = error_msg;
          console.log(`${text_input.name} is missing`);
        } else {

          text_input.closest(".usa-form-group").classList.remove(error_container_class);
          text_input.previousElementSibling.innerText = " ";
          text_input.classList.remove("usa-input--error");
        }
      });

      // Require at least one checkbox with the class specified
      if (document.body.contains(check_min_inputs[0])) {
        let len = document.querySelectorAll('.js-min_one[type="checkbox"]:checked').length,
          box = document.querySelectorAll('.js-min_one[type="checkbox"]'),
          container = document.querySelectorAll('.check-min-one')[0];

        if (len <= 0) {
          //msg.innerHTML = "Please check at least one";
          container.classList.add(error_container_class);
          not_pass = true;
        } else {
          container.classList.remove(error_container_class);
          //not_pass = false;
        }
      }

      // If inputs exist
      // It is assumed that all radios and checkboxes are required and atleast one text input will also exist on the page.
      if (document.body.contains(check_boxes[0])) {
        // Get all radio buttons, convert to an array.
        const inputs_array = Array.prototype.slice.call(check_boxes);

        // Reduce to get an array of radio button sets
        const questions = Object.values(inputs_array.reduce((result, el) => {
          return Object.assign(result, {[el.name]: (result[el.name] || []).concat(el)});
        }, {}));

        // Loop through each question, looking for any that aren't answered.
        let hasUnanswered = questions.some(question => !question.some(el => el.checked));
        questions.forEach(question => {
          if (!question.some(el => {
            return el.checked;
          })) {
            hasUnanswered = true;
            question.forEach(el => el.closest(".usa-fieldset").classList.add(error_container_class));

          } else {
            // hasUnanswered = false;
            question.forEach(el => el.closest(".usa-fieldset").classList.remove(error_container_class));
          }
        });
        // Radio button is un answered
        if (hasUnanswered && not_pass) {
          not_pass = true;
        }
        if (hasUnanswered) {
          not_pass = true;
        }
      }

      //if not pass then
      if (not_pass) {
        event.preventDefault();
        console.log('Page did not pass: ' + not_pass);
        didNotPass();
        return false;
      }
      if (!not_pass && typeof form == "object") {
        form.setAttribute('form-is-valid', 'true');
        return true;
      }
    }
  }
}

function setNoValidate(arg) {
  arg.setAttribute("novalidate", "true");
  return true;
};

function didNotPass() {
  setTimeout(function () {
    document.querySelector("[class$=-error] input, [class$=-error] select").focus();
    //errorField.focus();
  }, 100);
};


const enforceFormat = (event) => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

const formatToPhone = (event) => {
  if (isModifierKey(event)) { return; }

  // I am lazy and don't like to type things more than once
  const target = event.target;
  const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
  const area = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) { target.value = `${area}-${middle}-${last}`; }
  else if (input.length > 3) { target.value = `${area}${middle}`; }
  else if (input.length > 0) { target.value = `${area}`; }
};

function formatPhoneFields() {
  let tel_inputs = document.querySelectorAll("input[type=tel]");

  for (let tel_input of tel_inputs) {
    tel_input.addEventListener('keydown', enforceFormat);
    tel_input.addEventListener('keyup', formatToPhone)
  }
}

beginValidation(validateThis, formatPhoneFields())

const isNumericInput = (event) => {
  const key = event.keyCode;
  return ((key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event) => {
  const key = event.keyCode;
  return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    (
      // Allow Ctrl/Command + A,C,V,X,Z
      (event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
    )
};


//
// enforceFormat();
// formatToPhone();
