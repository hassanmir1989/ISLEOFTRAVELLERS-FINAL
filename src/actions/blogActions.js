const addAdminBlog = ({
  blogID,
  blogName,
  blogDescription,
  blogImageFileName,
  blogImageURL,
  blogLocation,
  blogUploadTime,
  blogUploadProcess,
  blogIsPublic
}) => ({
  type: "ADD_BLOG",
  blog: {
    blogID,
    blogName,
    blogDescription,
    blogImageFileName,
    blogImageURL,
    blogLocation,
    blogUploadTime,
    blogUploadProcess,
    blogIsPublic
  }
});

const removeAdminBlog = id => ({
  type: "REMOVE_BLOG",
  id
});

const editAdminBlog = ({ id, blog }) => ({
  type: "EDIT_BLOG",
  id,
  blog
});

export { addAdminBlog, removeAdminBlog, editAdminBlog };
