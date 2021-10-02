export const createPostError = (title,description,category) => {
    const errors = {};
    errors.title = title ? '' : 'title is required';
    errors.description = description ? '' : 'description is required';
    errors.category = category ? '' : 'category is required';
    return errors;
}