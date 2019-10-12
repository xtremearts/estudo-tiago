var BoxPostList = /** @class */ (function () {
    function BoxPostList() {
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector("#" + BoxPostList.listId + ">button[type=button]");
        buttonList.addEventListener('click', function () {
            _this.hidenBox();
            var boxForm = document.getElementById('box-post-form');
            boxForm.removeAttribute('style');
        });
    };
    BoxPostList.prototype.hidenBox = function () {
        var boxList = document.getElementById(BoxPostList.listId);
        boxList.style.display = 'none';
    };
    BoxPostList.prototype.showBox = function () {
        var boxList = document.getElementById(BoxPostList.listId);
        boxList.removeAttribute('style');
    };
    BoxPostList.listId = 'box-post-list';
    return BoxPostList;
}());
var BoxPostForm = /** @class */ (function () {
    function BoxPostForm() {
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        var buttonForm = document.querySelector("#" + BoxPostForm.formId + ">button[type=button]");
        buttonForm.addEventListener('click', function () {
            _this.hidenBox();
            var boxList = document.getElementById(BoxPostList.listId);
            boxList.removeAttribute('style');
        });
    };
    BoxPostForm.prototype.hidenBox = function () {
        var boxForm = document.getElementById(BoxPostForm.formId);
        boxForm.style.display = 'none';
    };
    BoxPostForm.prototype.showBox = function () {
        var boxForm = document.getElementById(BoxPostForm.formId);
        boxForm.removeAttribute('style');
    };
    BoxPostForm.formId = 'box-post-form';
    return BoxPostForm;
}());
new BoxPostForm();
new BoxPostList();
