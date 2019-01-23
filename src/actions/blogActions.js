import database from "../firebase/firebase";
import { storage } from "../firebase/firebase";

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
  return (dispatch, state) => {
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

const startRemoveAdminBlog = (id, blogImageFileName) => {
  return dispatch => {
    database
      .ref(`adminBlogs/${id}`)
      .remove()
      .then(() => {
        storage
          .ref(`blogImages/${blogImageFileName}`)
          .delete()
          .then(() => {
            dispatch(removeAdminBlog(id));
          });
      });
  };
};

const editAdminBlog = ({ id, blog }) => ({
  type: "EDIT_BLOG",
  id,
  blog
});

const startEditAdminBlog = ({ id, blog }) => {
  return dispatch => {
    database
      .ref(`adminBlogs/${id}`)
      .update({
        ...blog,
        blogUploadTime: blog.blogUploadTime.valueOf()
      })
      .then(() => {
        dispatch(editAdminBlog({ id, blog }));
      });
  };
};

const startAddBlogs = () => {
  return dispatch => {
    return database
      .ref("adminBlogs")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          dispatch(
            addAdminBlog({
              blogID: childSnapshot.key,
              ...childSnapshot.val()
            })
          );
        });
      });
  };
};
export {
  startAddAdminBlog,
  startAddBlogs,
  startRemoveAdminBlog,
  startEditAdminBlog
};
