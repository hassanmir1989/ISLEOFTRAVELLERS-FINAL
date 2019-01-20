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
    blogID
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

export { addAdminBlog };
