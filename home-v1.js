// function setCookie(name, value, days) {
//     var date, expires;
//     if (days) {
//         date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toGMTString();
//     } else {
//         expires = "";
//     }
//     document.cookie = name + "=" + value + expires + "; path=/";
// }
//
// var YHDBookmark = {
//     "add": function (filmId) {
//         $.ajax({
//             method: 'GET',
//             url: "/ajax/suggest",
//             data: {Bookmark: true, filmId: filmId, type: "add"},
//             dataType: 'json',
//             success: function (data) {
//                 if (data.status == 1) {
//                     return true;
//                 } else {
//                     fx.alertMessage("Xin chào!", "Bạn cần đăng nhập để sử dụng chức năng này!", 'error');
//                     return false;
//                 }
//             }
//         });
//     }, "remove": function (filmId) {
//         $.ajax({
//             method: 'GET',
//             url: "/ajax/notification",
//             data: {Bookmark: true, filmId: filmId, type: "remove"},
//             dataType: 'json',
//             success: function (data) {
//                 if (data.status == 1) {
//                     return true;
//                 } else {
//                     fx.alertMessage("Xin chào!", "Bạn cần đăng nhập để sử dụng chức năng này!", 'error');
//                     return false;
//                 }
//             }
//         });
//     }, "handle": function (data) {
//         if (data.status == 1) return true; else return false;
//     }, "checkBookmark": function (filmId) {
//         var result;
//         $.get("/ajax/notification?Bookmark=true&filmId=" + filmId, function (data) {
//             result = JSON.parse(data);
//             if (result.status == 1) return true; else return false;
//         });
//     }, "load": function () {
//         jQuery('#bookmark-box').css('display', 'block');
//         if (jQuery('.tools-box-bookmark').length > 0) {
//             jQuery('.tools-box-bookmark').each(function () {
//                 var filmId = jQuery(this).attr('data-filmid');
//                 if (typeof filmId == 'string') {
//                     filmId = jQuery.trim(filmId);
//                     filmId = parseInt(filmId);
//                     if (!isNaN(filmId) && filmId > 0) {
//                         $.get("/ajax/notification?Bookmark=true&filmId=" + filmId, function (data) {
//                             data = JSON.parse(data);
//                             if (data.status == 1) {
//                                 jQuery(".tools-box-bookmark").addClass('added');
//                                 jQuery(".tools-box-bookmark").removeClass('normal');
//                                 jQuery(".tools-box-bookmark").attr('data-added', 'true');
//                             } else {
//                                 jQuery(".tools-box-bookmark").addClass('normal');
//                                 jQuery(".tools-box-bookmark").removeClass('added');
//                                 jQuery(".tools-box-bookmark").attr('data-added', 'false');
//                             }
//                         });
//                     }
//                     ;jQuery(this).css('display', 'block');
//                 }
//                 ;
//             })
//         }
//         ;
//     }
// };
//
// function loadNotif() {
//     $.ajax({
//         method: 'GET', url: "/ajax/notification", data: {notif: true}, dataType: 'json', success: function (data) {
//             if (data.status == 1) {
//                 if (data.total > 0) {
//                     jQuery(".manage-notifi").html(data.html);
//                     jQuery(".navbar-notice-toggle").addClass("active");
//                     jQuery(".navbar-notice-toggle").html('<i class="fa fa-bell"></i> &nbsp;' + data.total);
//                 } else jQuery(".navbar-notice-toggle").html('<i class="fa fa-bell"></i>');
//             }
//         }
//     });
//     return false;
// }
//
// jQuery(document).ready(function (t) {
//     var fixKeyword = function (str) {
//         str = str.toLowerCase();
//         str = str.replace(/(<([^>]+)>)/gi, "");
//         str = str.replace(/[`~!@#$%^&*()_|\=?;:'",.<>\{\}\[\]\\\/]/gi, "");
//         str = str.split(" ").join("+");
//         return str;
//     }
//     jQuery('#form-search').submit(function () {
//         var keywordObj = jQuery(this).find('input[name=keyword]')[0];
//         if (typeof keywordObj != 'undefined' && keywordObj != null) {
//             var keyword = jQuery(keywordObj).val();
//             keyword = fixKeyword(keyword);
//             keyword = jQuery.trim(keyword);
//             if (keyword == '') {
//                 alert('Bạn chưa nhập từ khóa. (Không tính các ký tự đặc biệt vào độ dài từ khóa)');
//                 jQuery(keywordObj).focus();
//                 return false;
//             }
//             window.location.replace('/tim-kiem/' + keyword + '/');
//         }
//         return false;
//     });
//     jQuery('#form-search1').submit(function () {
//         var keywordObj = jQuery(this).find('input[name=keyword]')[0];
//         if (typeof keywordObj != 'undefined' && keywordObj != null) {
//             var keyword = jQuery(keywordObj).val();
//             keyword = fixKeyword(keyword);
//             keyword = jQuery.trim(keyword);
//             if (keyword == '') {
//                 alert('Bạn chưa nhập từ khóa. (Không tính các ký tự đặc biệt vào độ dài từ khóa)');
//                 jQuery(keywordObj).focus();
//                 return false;
//             }
//             window.location.replace('/tim-kiem/' + keyword + '/');
//         }
//         return false;
//     });
//     YHDBookmark.load();
//     $('div.Top').on('click', 'a.STPb', function (e) {
//         e.preventDefault();
//         $this = $(this);
//         var $parent = $this.parents("section").attr("id");
//         var $tag = $this.data("tag");
//         $('#' + $parent + ' .Top a').removeClass("Current");
//         $this.addClass("Current");
//         var href = $this.attr("href");
//         $("a.viewall").attr("href", href);
//         $("#loading").css({"display": "block"});
//         $.ajax({
//             type: 'POST',
//             url: MAIN_URL + '/ajax/item',
//             data: {widget: 'list-film', type: $tag},
//             success: function (html) {
//                 $('#' + $parent + ' ul.MovieList').html(html);
//                 $("#loading").css({"display": "none"});
//             },
//             error: function () {
//                 fx.alertMessage("Lỗi", "Đã có lỗi xảy ra trong quá trình gửi dữ liệu!", "error");
//             }
//         });
//     });
//     jQuery('.tools-box-bookmark').click(function () {
//         var $this = jQuery('.tools-box-bookmark');
//         var added = $this.attr('data-added');
//         var filmId = $this.attr('data-filmid');
//         if (typeof added == 'string' && added == 'true') {
//             added = true
//         } else {
//             added = false
//         }
//         ;
//         if (added) {
//             $.ajax({
//                 method: 'GET',
//                 url: "/ajax/notification",
//                 data: {Bookmark: true, filmId: filmId, type: "remove"},
//                 dataType: 'json',
//                 success: function (data) {
//                     if (data.status == 1) {
//                         $this.addClass('normal');
//                         $this.removeClass('added');
//                         $this.attr('data-added', 'false');
//                         fx.alertMessage("Bỏ theo dõi", "Bạn đã bỏ theo dõi thành công phim này!", 'error');
//                     } else {
//                         fx.alertMessage("Xin chào!", "Bạn cần đăng nhập để sử dụng chức năng này!", 'error');
//                     }
//                 }
//             });
//         } else {
//             $.ajax({
//                 method: 'GET',
//                 url: "/ajax/notification",
//                 data: {Bookmark: true, filmId: filmId, type: "add"},
//                 dataType: 'json',
//                 success: function (data) {
//                     if (data.status == 1) {
//                         $this.addClass('added');
//                         $this.removeClass('normal');
//                         $this.attr('data-added', 'true');
//                         fx.alertMessage("Theo dõi", "Bạn đã theo dõi thành công phim này!", 'success');
//                     } else {
//                         fx.alertMessage("Xin chào!", "Bạn cần đăng nhập để sử dụng chức năng này!", 'error');
//                     }
//                 }
//             });
//         }
//         ;
//         return false
//     });
// });
//
// function onSearch($keysearch, $id) {
//     if ($keysearch.length < 1) {
//         $('.search-suggest').fadeOut();
//     } else {
//         $.post(MAIN_URL + '/ajax/suggest', {ajaxSearch: 1, keysearch: $keysearch}, function (data) {
//             if (data.length > 0) {
//                 $(".search-suggest").css({"display": "block"});
//                 $("#" + $id + " ul#search-suggest-list").html(data);
//             }
//         });
//     }
//     return false;
// }
//
// $(document).ready(function () {
//     $(".navbar-notice-toggle").click(function (e) {
//         if (jQuery(".manage-notifi").hasClass("login-active")) {
//             jQuery(".manage-notifi").removeClass("login-active");
//             jQuery("div#clear-all-notif").remove();
//         } else {
//             jQuery(".manage-notifi").addClass("login-active");
//             if (jQuery(".manage-notifi").children().length > 0) {
//                 var $manage_notifi_height = jQuery(".manage-notifi").height();
//                 var $height_notifi = $manage_notifi_height + 48;
//                 jQuery('<div id="clear-all-notif" style="position: absolute;right: 0;top: ' + $height_notifi + 'px;width: 400px;background: #dfdfdf;font-weight: bold;color: #333;text-align: center;padding: 5px 0;z-index: 9999;border-bottom-right-radius: 8px;border-bottom-left-radius: 8px;cursor: pointer;">Xoá tất cả</div>').insertAfter(".manage-notifi");
//             } else {
//                 jQuery(".manage-notifi").text('Không có thông báo').css({"text-align": "center"});
//             }
//         }
//         e.stopPropagation();
//     });
//     $("body").on('click', '#clear-all-notif', function () {
//         console.log("Clear all notification!");
//         $.ajax({
//             method: 'POST',
//             url: "/ajax/notification",
//             data: {Delete: "all"},
//             dataType: 'json',
//             success: function (data) {
//                 if (data.status == 1) {
//                     jQuery("#clear-all-notif").remove();
//                     jQuery(".manage-notifi").text('Không có thông báo').css({"text-align": "center"});
//                     jQuery(".navbar-notice-toggle").html('<i class="fa fa-bell"></i>');
//                     fx.alertMessage("Chúc mừng", "Bạn đã xoá thành công tất cả thông báo!", 'success');
//                 } else {
//                     fx.alertMessage("Xin chào!", "Bạn cần đăng nhập để sử dụng chức năng này!", 'error');
//                 }
//             }
//         });
//     });
//     $("div.navbar-notice").on('click', 'i#notification-delete', function () {
//         var id = parseInt(jQuery(this).attr('data-id'));
//         $.ajax({
//             method: 'POST',
//             url: "/ajax/notification",
//             data: {Delete: true, id: id},
//             dataType: 'json',
//             success: function (data) {
//                 if (data.status == 1) {
//                     loadNotif();
//                 } else {
//                     fx.alertMessage("Xin chào!", "Bạn cần đăng nhập để sử dụng chức năng này!", 'error');
//                 }
//             }
//         });
//     });
//     $("body").click(function (e) {
//         console.log(e.target.className);
//         if (e.target.className == "notification-delete" || e.target.className == "fa-times" || e.target.className == "fa fa-times notification-delete") {
//             console.log("Delete Notification");
//         } else {
//             jQuery(".manage-notifi").removeClass("login-active");
//         }
//     });
//     loadNotif();
//     $('#scrollToComment').on('click', function () {
//         $('#comments').get(0).scrollIntoView({block: "start", behavior: "smooth"});
//     });
//
//     function epiScroll(wraps) {
//         wraps.forEach(wrap => {
//             const wrapper = wrap
//             if (wrapper.length > 0) {
//                 n = wrapper.find('.btn-episode').length
//                 p = wrapper.find('.btn-episode.active').parent()
//                 l = Math.floor(p.position().top / p.height());
//                 wrap.animate({scrollTop: p.height() * l - 100}, 1000)
//             }
//         })
//     }
//
//     epiScroll([$('.list-episode.tab-pane')]);
// });
//
// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1);
//         if (c.indexOf(name) != -1) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }
//
// var filmInfo = {};