import database from "../firebase/firebase";

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

const startAddAdminBlog = (blogDetails = {}) => {
  return dispatch => {
    database
      .ref(`adminBlogs`)
      .push({
        ...blogDetails,
        blogUploadTime: blogDetails.blogUploadTime.valueOf()
      })

      .then(ref => {
        dispatch(
          addAdminBlog({
            ...blogDetails,
            blogID: ref.key
          })
        );
      });
  };
};

const removeAdminBlog = id => ({
  type: "REMOVE_BLOG",
  id
});

const editAdminBlog = ({ id, blog }) => ({
  type: "EDIT_BLOG",
  id,
  blog
});

export { startAddAdminBlog, removeAdminBlog, editAdminBlog };
