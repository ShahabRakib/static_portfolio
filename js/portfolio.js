/*(preloader starts)*/
var pLoad = document.getElementById("wrapLoader");
function pLoader() {
    pLoad.style.cssText = "display: none;";
}
/*(preloader ends)*/
/*(menu item responsive starts)*/
var menuItemId = document.getElementById("menuItemsId");
var menuIconId = document.getElementById("menuIconsId");
menuIconId.addEventListener("click", function() {
  if(menuItemId.style.opacity == "1"){
      menuItemId.style.cssText = "opacity: 0; right: -100%; transition: .5s; -webkit-transition: .5s;";
  }
  else{
    menuItemId.style.cssText = "opacity: 1; right: 0; transition: .5s; -webkit-transition: .5s;";
  }
});
/*(menu item responsive ends)*/


/*(profile edit starts)*/
// JavaScript to handle the modal

// Open the modal
document.addEventListener('DOMContentLoaded', function() {
  var profileEditModal = document.getElementById('profile_edit_form_id');
  var profileEditBtn = document.getElementById('edit_profile_id');
  var profileEditCloseButtons = document.getElementsByClassName('profileCloseForm');

  // Ensure the modal and buttons exist
  if (profileEditModal && profileEditBtn) {
      // Open the modal
      profileEditBtn.onclick = function() {
          profileEditModal.style.display = 'block';
      };

      // Close the modal when the close buttons are clicked
      if (profileEditCloseButtons.length > 0) {
          for (var i = 0; i < profileEditCloseButtons.length; i++) {
              profileEditCloseButtons[i].onclick = function() {
                  profileEditModal.style.display = 'none';
              };
          }
      }

      // Close the modal if clicking outside of it
      document.addEventListener('click', function(event) {
          if (!profileEditModal.contains(event.target) && event.target !== profileEditBtn) {
              profileEditModal.style.display = 'none';
          }
      });
  }
});



/**********(post starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var postOpenBtn = document.getElementById('open_post_id');
  var postModal = document.getElementById('post_edit_form_id');
  var postCloseButtons = document.getElementsByClassName('postCloseForm');

  // Ensure the modal and buttons exist
  if (postOpenBtn && postModal) {
      // Open the post modal
      postOpenBtn.onclick = function() {
          postModal.style.display = 'block';
      };

      // Close the post modal when the close buttons are clicked
      if (postCloseButtons.length > 0) {
          for (var i = 0; i < postCloseButtons.length; i++) {
              postCloseButtons[i].onclick = function() {
                  postModal.style.display = 'none';
              };
          }
      }

      // Close the post modal if clicking outside of it
      document.addEventListener('click', function(event) {
          if (!postModal.contains(event.target) && event.target !== postOpenBtn) {
              postModal.style.display = 'none';
          }
      });
  }
});

/**********(post ends)***********/


/**********(post three dot open starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var postThreeDotBtns = document.querySelectorAll('[id="post_three_dot_id"]');
  var postEditNavs = document.querySelectorAll('[id="post_edit_nav_id"]');

  postThreeDotBtns.forEach(function(btn, index) {
      btn.addEventListener("click", function(event) {
          // Hide all edit navs first
          postEditNavs.forEach(function(nav) {
              nav.style.display = "none";
          });

          // Show the corresponding edit nav
          postEditNavs[index].style.display = "block";
          event.stopPropagation(); // Prevent the click from closing the nav immediately
      });
  });

  document.addEventListener("click", function(event) {
      postEditNavs.forEach(function(nav) {
          if (!nav.contains(event.target) && !Array.from(postThreeDotBtns).includes(event.target)) {
              nav.style.display = "none";
          }
      });
  });
});

/**********(post three dot open ends)***********/

/**********(post edit button for post edit open starts)***********/
document.addEventListener('DOMContentLoaded', function() {
  var editPostNavBtns = document.querySelectorAll('[id="edit_post_nav_id"]');
  var postEditForms = document.querySelectorAll('[id="target_post_edit_form_id"]');
  var postEditFormCloseBtns = document.querySelectorAll('.target_postCloseForm');

  if (editPostNavBtns.length > 0 && postEditForms.length > 0) {
      editPostNavBtns.forEach(function(editPostNavBtn, index) {
          var postEditFormOpen = postEditForms[index];

          // Open the post edit form
          editPostNavBtn.addEventListener('click', function() {
              postEditForms.forEach(function(form) {
                  form.style.display = 'none';
              });
              postEditFormOpen.style.display = 'block';
          });

          // Close the post edit form when clicking close buttons
          postEditFormCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  postEditFormOpen.style.display = 'none';
              });
          });

          // Close the post edit form if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!postEditFormOpen.contains(event.target) && event.target !== editPostNavBtn) {
                  postEditFormOpen.style.display = 'none';
              }
          });
      });
  }
});


/**********(post edit button for post edit open ends)***********/

/**********(post delet starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var deletePostNavBtns = document.querySelectorAll('[id="delet_post_nav_id"]');
  var areYouSureDlts = document.querySelectorAll('[id="dl_post_id"]');
  var deletePostCloseBtns = document.querySelectorAll('.no_for_close_dl');

  if (deletePostNavBtns.length > 0 && areYouSureDlts.length > 0) {
      deletePostNavBtns.forEach(function(deletePostNavBtn, index) {
          var areYouSureDltOpen = areYouSureDlts[index];

          // Open the delete confirmation modal
          deletePostNavBtn.addEventListener('click', function() {
              areYouSureDlts.forEach(function(modal) {
                  modal.style.display = 'none';
              });
              areYouSureDltOpen.style.display = 'block';
          });

          // Close the delete confirmation modal when clicking close buttons
          deletePostCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  areYouSureDltOpen.style.display = 'none';
              });
          });

          // Close the delete confirmation modal if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!areYouSureDltOpen.contains(event.target) && event.target !== deletePostNavBtn) {
                  areYouSureDltOpen.style.display = 'none';
              }
          });
      });
  }
});


/**********(post delet ends)***********/

/**********(like post starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var likePostBtns = document.querySelectorAll('[id="like_post_id"]');
  var likeListPostOpens = document.querySelectorAll('[id="likes_list_post_id"]');
  var likeListPostCloseBtns = document.querySelectorAll('.close_like_post_list');

  if (likePostBtns.length > 0 && likeListPostOpens.length > 0) {
      likePostBtns.forEach(function(likePostBtn, index) {
          var likeListPostOpen = likeListPostOpens[index];

          // Open the likes list
          likePostBtn.addEventListener('click', function() {
              likeListPostOpens.forEach(function(list) {
                  list.style.display = 'none';
              });
              likeListPostOpen.style.display = 'block';
          });

          // Close the likes list when clicking close buttons
          likeListPostCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  likeListPostOpen.style.display = 'none';
              });
          });

          // Close the likes list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!likeListPostOpen.contains(event.target) && event.target !== likePostBtn) {
                  likeListPostOpen.style.display = 'none';
              }
          });
      });
  }
});

/**********(like post ends)***********/

/**********(dislike post starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var dislikePostBtns = document.querySelectorAll('[id="dislike_post_id"]');
  var dislikeListPostOpens = document.querySelectorAll('[id="dislikes_post_id"]');
  var dislikeListPostCloseBtns = document.querySelectorAll('.close_dislike_post_list');

  if (dislikePostBtns.length > 0 && dislikeListPostOpens.length > 0) {
      dislikePostBtns.forEach(function(dislikePostBtn, index) {
          var dislikeListPostOpen = dislikeListPostOpens[index];

          // Open the dislikes list
          dislikePostBtn.addEventListener('click', function() {
              dislikeListPostOpens.forEach(function(list) {
                  list.style.display = 'none';
              });
              dislikeListPostOpen.style.display = 'block';
          });

          // Close the dislikes list when clicking close buttons
          dislikeListPostCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  dislikeListPostOpen.style.display = 'none';
              });
          });

          // Close the dislikes list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!dislikeListPostOpen.contains(event.target) && event.target !== dislikePostBtn) {
                  dislikeListPostOpen.style.display = 'none';
              }
          });
      });
  }
});

/**********(dislike post ends)***********/

/**********(neutral post starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var neutralPostBtns = document.querySelectorAll('[id="neutral_post_id"]');
  var neutralsListPostOpens = document.querySelectorAll('[id="neutrals_post_id"]');
  var neutralListPostCloseBtns = document.querySelectorAll('.close_neutral_post_list');

  if (neutralPostBtns.length > 0 && neutralsListPostOpens.length > 0) {
      neutralPostBtns.forEach(function(neutralPostBtn, index) {
          var neutralsListPostOpen = neutralsListPostOpens[index];

          // Open the neutrals list
          neutralPostBtn.addEventListener('click', function() {
              neutralsListPostOpens.forEach(function(list) {
                  list.style.display = 'none';
              });
              neutralsListPostOpen.style.display = 'block';
          });

          // Close the neutrals list when clicking close buttons
          neutralListPostCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  neutralsListPostOpen.style.display = 'none';
              });
          });

          // Close the neutrals list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!neutralsListPostOpen.contains(event.target) && event.target !== neutralPostBtn) {
                  neutralsListPostOpen.style.display = 'none';
              }
          });
      });
  }
});

/**********(neutral post ends)***********/

/**********(comment post starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var commentPostBtns = document.querySelectorAll('[id="comment_post_id"]');
  var commentsFormContainers = document.querySelectorAll('[id="comments_form_container_id"]');
  var closeCommentForms = document.querySelectorAll('.close_comment_form');

  if (commentPostBtns.length > 0 && commentsFormContainers.length > 0) {
      commentPostBtns.forEach(function(commentPostBtn, index) {
          var commentsFormContainer = commentsFormContainers[index];

          // Open the comments form
          commentPostBtn.addEventListener('click', function() {
              commentsFormContainers.forEach(function(container) {
                  container.style.visibility = 'hidden';
              });
              commentsFormContainer.style.visibility = 'visible';
          });

          // Close the comments form when clicking close buttons
          closeCommentForms.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  commentsFormContainer.style.visibility = 'hidden';
              });
          });

          // Close the comments form if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!commentsFormContainer.contains(event.target) && event.target !== commentPostBtn) {
                  commentsFormContainer.style.visibility = 'hidden';
              }
          });
      });
  }
});

/**********(comment post ends)***********/

/**********(parent comment like starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var parentCommentLikeBtns = document.querySelectorAll('[id="parent_comment_like_id"]');
  var parentComLikeLists = document.querySelectorAll('[id="parent_com_like_list_id"]');
  var parentComLikeListCloseBtns = document.querySelectorAll('.parent_com_like_list');

  if (parentCommentLikeBtns.length > 0 && parentComLikeLists.length > 0) {
      parentCommentLikeBtns.forEach(function(likeBtn, index) {
          var parentComLikeList = parentComLikeLists[index];

          // Open the like list
          likeBtn.addEventListener('click', function() {
              parentComLikeLists.forEach(function(list) {
                  list.style.display = 'none';
              });
              parentComLikeList.style.display = 'block';
          });

          // Close the like list when clicking close buttons
          parentComLikeListCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  parentComLikeList.style.display = 'none';
              });
          });

          // Close the like list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!parentComLikeList.contains(event.target) && event.target !== likeBtn) {
                  parentComLikeList.style.display = 'none';
              }
          });
      });
  }
});

/**********(parent comment like ends)***********/

/**********(parent comment dislike starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var parentCommentDislikeBtns = document.querySelectorAll('[id="parent_comment_dislike_id"]');
  var parentComDislikeLists = document.querySelectorAll('[id="parent_com_dislike_list_id"]');
  var parentComDislikeListCloseBtns = document.querySelectorAll('.parent_com_dislike_list');

  if (parentCommentDislikeBtns.length > 0 && parentComDislikeLists.length > 0) {
      parentCommentDislikeBtns.forEach(function(dislikeBtn, index) {
          var parentComDislikeList = parentComDislikeLists[index];

          // Open the dislike list
          dislikeBtn.addEventListener('click', function() {
              parentComDislikeLists.forEach(function(list) {
                  list.style.display = 'none';
              });
              parentComDislikeList.style.display = 'block';
          });

          // Close the dislike list when clicking close buttons
          parentComDislikeListCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  parentComDislikeList.style.display = 'none';
              });
          });

          // Close the dislike list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!parentComDislikeList.contains(event.target) && event.target !== dislikeBtn) {
                  parentComDislikeList.style.display = 'none';
              }
          });
      });
  }
});

/**********(parent comment dislike ends)***********/

/**********(parent comment neutral starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var parentCommentNeutralBtns = document.querySelectorAll('[id="parent_comment_neutral_id"]');
  var parentComNeutralLists = document.querySelectorAll('[id="parent_com_neutral_list_id"]');
  var parentComNeutralListCloseBtns = document.querySelectorAll('.parent_com_neutral_list');

  if (parentCommentNeutralBtns.length > 0 && parentComNeutralLists.length > 0) {
      parentCommentNeutralBtns.forEach(function(neutralBtn, index) {
          var parentComNeutralList = parentComNeutralLists[index];

          // Open the neutral list
          neutralBtn.addEventListener('click', function() {
              parentComNeutralLists.forEach(function(list) {
                  list.style.display = 'none';
              });
              parentComNeutralList.style.display = 'block';
          });

          // Close the neutral list when clicking close buttons
          parentComNeutralListCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  parentComNeutralList.style.display = 'none';
              });
          });

          // Close the neutral list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!parentComNeutralList.contains(event.target) && event.target !== neutralBtn) {
                  parentComNeutralList.style.display = 'none';
              }
          });
      });
  }
});

/**********(parent comment neutral ends)***********/

/**********(mid comment like starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var midCommentLikeBtns = document.querySelectorAll('[id="mid_com_like_id"]');
  var midComLikeLists = document.querySelectorAll('[id="mid_com_like_list_id"]');
  var midComLikeListCloseBtns = document.querySelectorAll('.mid_com_like_list');

  if (midCommentLikeBtns.length > 0 && midComLikeLists.length > 0) {
      midCommentLikeBtns.forEach(function(likeBtn, index) {
          var midComLikeList = midComLikeLists[index];

          // Open the like list
          likeBtn.addEventListener('click', function() {
              midComLikeLists.forEach(function(list) {
                  list.style.display = 'none';
              });
              midComLikeList.style.display = 'block';
          });

          // Close the like list when clicking close buttons
          midComLikeListCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  midComLikeList.style.display = 'none';
              });
          });

          // Close the like list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!midComLikeList.contains(event.target) && event.target !== likeBtn) {
                  midComLikeList.style.display = 'none';
              }
          });
      });
  }
});

/**********(mid comment like ends)***********/

/**********(mid comment dislike starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var midCommentDislikeBtns = document.querySelectorAll('[id="mid_com_dislike_id"]');
  var midComDislikeLists = document.querySelectorAll('[id="mid_com_dislike_list_id"]');
  var midComDislikeListCloseBtns = document.querySelectorAll('.mid_com_dislike_list');

  if (midCommentDislikeBtns.length > 0 && midComDislikeLists.length > 0) {
      midCommentDislikeBtns.forEach(function(dislikeBtn, index) {
          var midComDislikeList = midComDislikeLists[index];

          // Open the dislike list
          dislikeBtn.addEventListener('click', function() {
              midComDislikeLists.forEach(function(list) {
                  list.style.display = 'none';
              });
              midComDislikeList.style.display = 'block';
          });

          // Close the dislike list when clicking close buttons
          midComDislikeListCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  midComDislikeList.style.display = 'none';
              });
          });

          // Close the dislike list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!midComDislikeList.contains(event.target) && event.target !== dislikeBtn) {
                  midComDislikeList.style.display = 'none';
              }
          });
      });
  }
});

/**********(mid comment dislike ends)***********/

/**********(mid comment neutral starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var midCommentNeutralBtns = document.querySelectorAll('[id="mid_com_neutral_id"]');
  var midComNeutralLists = document.querySelectorAll('[id="mid_com_neutral_list_id"]');
  var midComNeutralListCloseBtns = document.querySelectorAll('.mid_com_neutral_list');

  if (midCommentNeutralBtns.length > 0 && midComNeutralLists.length > 0) {
      midCommentNeutralBtns.forEach(function(neutralBtn, index) {
          var midComNeutralList = midComNeutralLists[index];

          // Open the neutral list
          neutralBtn.addEventListener('click', function() {
              midComNeutralLists.forEach(function(list) {
                  list.style.display = 'none';
              });
              midComNeutralList.style.display = 'block';
          });

          // Close the neutral list when clicking close buttons
          midComNeutralListCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  midComNeutralList.style.display = 'none';
              });
          });

          // Close the neutral list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!midComNeutralList.contains(event.target) && event.target !== neutralBtn) {
                  midComNeutralList.style.display = 'none';
              }
          });
      });
  }
});

/**********(mid comment neutral ends)***********/

/**********(last comment like starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var lastCommentLikeBtns = document.querySelectorAll('[id="last_com_like_id"]');
  var lastComLikeLists = document.querySelectorAll('[id="last_com_like_list_id"]');
  var lastComLikeListCloseBtns = document.querySelectorAll('.last_com_like_list');

  if (lastCommentLikeBtns.length > 0 && lastComLikeLists.length > 0) {
      lastCommentLikeBtns.forEach(function(likeBtn, index) {
          var lastComLikeList = lastComLikeLists[index];

          // Open the like list
          likeBtn.addEventListener('click', function() {
              lastComLikeLists.forEach(function(list) {
                  list.style.display = 'none';
              });
              lastComLikeList.style.display = 'block';
          });

          // Close the like list when clicking close buttons
          lastComLikeListCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  lastComLikeList.style.display = 'none';
              });
          });

          // Close the like list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!lastComLikeList.contains(event.target) && event.target !== likeBtn) {
                  lastComLikeList.style.display = 'none';
              }
          });
      });
  }
});

/**********(last comment like ends)***********/

/**********(last comment dislike starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var lastCommentDislikeBtns = document.querySelectorAll('[id="last_com_dislike_id"]');
  var lastComDislikeLists = document.querySelectorAll('[id="last_com_dislike_list_id"]');
  var lastComDislikeListCloseBtns = document.querySelectorAll('.last_com_dislike_list');

  if (lastCommentDislikeBtns.length > 0 && lastComDislikeLists.length > 0) {
      lastCommentDislikeBtns.forEach(function(dislikeBtn, index) {
          var lastComDislikeList = lastComDislikeLists[index];

          // Open the dislike list
          dislikeBtn.addEventListener('click', function() {
              lastComDislikeLists.forEach(function(list) {
                  list.style.display = 'none';
              });
              lastComDislikeList.style.display = 'block';
          });

          // Close the dislike list when clicking close buttons
          lastComDislikeListCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  lastComDislikeList.style.display = 'none';
              });
          });

          // Close the dislike list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!lastComDislikeList.contains(event.target) && event.target !== dislikeBtn) {
                  lastComDislikeList.style.display = 'none';
              }
          });
      });
  }
});

/**********(last comment dislike ends)***********/

/**********(last comment neutral starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var lastCommentNeutralBtns = document.querySelectorAll('[id="last_com_neutral_id"]');
  var lastComNeutralLists = document.querySelectorAll('[id="last_com_neutral_list_id"]');
  var lastComNeutralListCloseBtns = document.querySelectorAll('.last_com_neutral_list');

  if (lastCommentNeutralBtns.length > 0 && lastComNeutralLists.length > 0) {
      lastCommentNeutralBtns.forEach(function(neutralBtn, index) {
          var lastComNeutralList = lastComNeutralLists[index];

          // Open the neutral list
          neutralBtn.addEventListener('click', function() {
              lastComNeutralLists.forEach(function(list) {
                  list.style.display = 'none';
              });
              lastComNeutralList.style.display = 'block';
          });

          // Close the neutral list when clicking close buttons
          lastComNeutralListCloseBtns.forEach(function(closeBtn) {
              closeBtn.addEventListener('click', function() {
                  lastComNeutralList.style.display = 'none';
              });
          });

          // Close the neutral list if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!lastComNeutralList.contains(event.target) && event.target !== neutralBtn) {
                  lastComNeutralList.style.display = 'none';
              }
          });
      });
  }
});

/**********(last comment neutral ends)***********/

/**********(reply first comment starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var replyFirstComBtns = document.querySelectorAll('[id="reply_first_com_id"]');
  var firstCommentReplies = document.querySelectorAll('[id="first_comment_reply_id"]');

  if (replyFirstComBtns.length > 0 && firstCommentReplies.length > 0) {
      replyFirstComBtns.forEach(function(replyBtn, index) {
          var firstCommentReply = firstCommentReplies[index];

          // Open the first comment reply section
          replyBtn.addEventListener('click', function() {
              firstCommentReplies.forEach(function(reply) {
                  reply.style.display = 'none';
              });
              firstCommentReply.style.display = 'block';
          });

          // Close the first comment reply section if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!firstCommentReply.contains(event.target) && event.target !== replyBtn) {
                  firstCommentReply.style.display = 'none';
              }
          });
      });
  }
});

/**********(reply first comment ends)***********/

/**********(reply mid comment starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var replyMidComBtns = document.querySelectorAll('[id="reply_mid_com_id"]');
  var midCommentReplies = document.querySelectorAll('[id="mid_comment_reply_id"]');

  if (replyMidComBtns.length > 0 && midCommentReplies.length > 0) {
      replyMidComBtns.forEach(function(replyBtn, index) {
          var midCommentReply = midCommentReplies[index];

          // Open the mid comment reply section
          replyBtn.addEventListener('click', function() {
              midCommentReplies.forEach(function(reply) {
                  reply.style.display = 'none';
              });
              midCommentReply.style.display = 'block';
          });

          // Close the mid comment reply section if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!midCommentReply.contains(event.target) && event.target !== replyBtn) {
                  midCommentReply.style.display = 'none';
              }
          });
      });
  }
});

/**********(reply mid comment ends)***********/

/**********(reply last comment starts)***********/

document.addEventListener('DOMContentLoaded', function() {
  var replyLastComBtns = document.querySelectorAll('[id="reply_last_com_id"]');
  var lastCommentReplies = document.querySelectorAll('[id="last_comment_reply_id"]');

  if (replyLastComBtns.length > 0 && lastCommentReplies.length > 0) {
      replyLastComBtns.forEach(function(replyBtn, index) {
          var lastCommentReply = lastCommentReplies[index];

          // Open the last comment reply section
          replyBtn.addEventListener('click', function() {
              lastCommentReplies.forEach(function(reply) {
                  reply.style.display = 'none';
              });
              lastCommentReply.style.display = 'block';
          });

          // Close the last comment reply section if clicking outside of it
          document.addEventListener('click', function(event) {
              if (!lastCommentReply.contains(event.target) && event.target !== replyBtn) {
                  lastCommentReply.style.display = 'none';
              }
          });
      });
  }
});

/**********(reply last comment ends)***********/

/**********(post video starts)***********/
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('miu_post_video');

  // Check if the video is in the viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  // Autoplay when in view
  function checkAutoplay() {
      if (isInViewport(video)) {
          video.play();
      } else {
          video.pause();
      }
  }

  // Listen to the scroll and resize events
  window.addEventListener('scroll', checkAutoplay);
  window.addEventListener('resize', checkAutoplay);

  // Initially check if the video is in view
  checkAutoplay();

  // Unmute the video when the user interacts with the sound button
  video.addEventListener('volumechange', function() {
      if (!video.muted) {
          video.volume = 1.0; // Set volume to normal
      }
  });

  // Mute the video initially
  video.muted = true;
});

/**********(post video ends)***********/

/**********(post video ends)***********/

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.see-more-btn').forEach(function(button) {
      button.addEventListener('click', function() {
          const postContainer = button.closest('.target_post_contents');
          postContainer.querySelector('.post-short').style.display = 'none';
          postContainer.querySelector('.post-full').style.display = 'inline';
          button.style.display = 'none';
      });
  });
});

/**********(post video ends)***********/

/**********(Bangla font starts)***********/
document.addEventListener('DOMContentLoaded', function() {
  var posts = document.querySelectorAll('.target_post_contents p');

  posts.forEach(function(post) {
      if (/[অ-ঔক-হ০-৯]/.test(post.textContent)) {
          // If Bangla characters are detected, apply the Bangla class
          post.classList.add('bangla');
      }
  });
});
/**********(Bangla font add ends)***********/

/**********(Post reaction starts***********/

function sendReaction(reaction, postId, userId) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'post_reaction.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            // Update the reaction counts in the HTML
            document.querySelectorAll('.post-reaction-count').forEach(function(span) {
                if (span.getAttribute('data-post-id') === String(postId)) {
                    if (span.getAttribute('data-reaction') === 'like') {
                        span.innerText = 'L - ' + response.like;
                    } else if (span.getAttribute('data-reaction') === 'dislike') {
                        span.innerText = 'D - ' + response.dislike;
                    } else if (span.getAttribute('data-reaction') === 'neutral') {
                        span.innerText = 'N - ' + response.neutral;
                    }
                }
            });
        }
    };

    xhr.send('reaction=' + reaction + '&post_id=' + postId + '&user_id=' + userId);
}
/**********(Post reaction ends)***********/

/**********(copy link starts)***********/

document.addEventListener('DOMContentLoaded', function() {
    var copyButtons = document.querySelectorAll('.copy-link-btn');
    
    copyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var url = this.getAttribute('data-url');
            navigator.clipboard.writeText(url).then(function() {
                alert('Link copied to clipboard!');
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
            });
        });
    });
});
/**********(copy link ends)***********/

/**********(color combination of page starts)***********/

/**********(color combination of page ends)***********/
