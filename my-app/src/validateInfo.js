export default function validateInfo(values) {
    let errors= {}

    if(!values.name.trim()) {
        errors.name = 'Name Required'
    }

    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }

    if(!values.country) {
        errors.country = 'Country Required'
    }

    return errors;
}