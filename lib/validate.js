export  function post_validate(values) {
    const errors = {}

    if (!values.title) {
        errors.title = "Title Required"
    } else if (values.title.length < 15 || values.title.length > 80) {
        errors.title = "Must be greater then 15 and less then 80 characters long"
    }

    if (!values.category) {
        errors.category = "category Required"
    }else if (values.category.length < 3 || values.category.length > 20) {
        errors.category = "Must be greater then 3 and less then 20 characters long"
    
    }
    if (!values.imgurl) {
        errors.imgurl = "Required"
    }

    if (!values.content) {
        errors.content = "Required"
    } else if (values.content.length < 100 || values.content.length > 1000) {
        errors.content = "Must be greater then 100 and less then 1000 characters long"
    }
    return errors
}
