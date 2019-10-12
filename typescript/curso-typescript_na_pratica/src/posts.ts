class BoxPostList {
    static listId = 'box-post-list';

    constructor() {
        this.init();
    }

    private init() {
        const buttonList = document.querySelector(`#${BoxPostList.listId}>button[type=button]`);
        buttonList.addEventListener('click', () => {
            this.hidenBox();

            const boxForm = document.getElementById('box-post-form');
            boxForm.removeAttribute('style');
        });
    }

    hidenBox() {
        const boxList = document.getElementById(BoxPostList.listId);
        boxList.style.display = 'none';
    }

    showBox() {
        const boxList = document.getElementById(BoxPostList.listId);
        boxList.removeAttribute('style');
    }
}

class BoxPostForm {
    static formId = 'box-post-form';
    constructor() {
        this.init();
    }

    private init() {
        const buttonForm = document.querySelector(`#${BoxPostForm.formId}>button[type=button]`);
        buttonForm.addEventListener('click', () => {
            this.hidenBox();
            const boxList = document.getElementById(BoxPostList.listId);
            boxList.removeAttribute('style');
        });
    }

    hidenBox() {
        const boxForm = document.getElementById(BoxPostForm.formId);
        boxForm.style.display = 'none';
    }

    showBox() {
        const boxForm = document.getElementById(BoxPostForm.formId);
        boxForm.removeAttribute('style');
    }
}

new BoxPostForm();
new BoxPostList();