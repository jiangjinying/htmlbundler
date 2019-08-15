var Dialog = {
    containerId:'pop-box',
    containerClass: 'pop-box-container active fadeIn',
    toastClass: 'pop-toast-dialog fadeIn',
    box: null,
    textTemplate: {
        title: '',
        content: '提示内容',
        okBtn: '好的',
        cancelBtn: '取消',
        promptTitle: '',
        promptOkBtn: "确认",
        hidetime:2500,
        toasttop:"50%"
    },
    getBasicTemplate: function (type) {
        var temp =
            '<div class="pop-box-dialog">' +
            '<div class="pop-box-content">' +
            '<div class="pop-box-header">' +
            '<span class="pop-box-close-btn">×</span>' +
            '<span class="pop-box-title">' +
            '<span >' + this.textTemplate.title + '</span>' +
            '</span>' +
            '</div>' +
            '<div class="pop-box-text">' +
            '<span>' + this.textTemplate.content + '</span>' +
            '</div>' +
            '<div class="pop-box-footer">' +
            '<button class="btn-footer btn-block-footer btn-footer-ok">' + this.textTemplate.okBtn + '</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        return temp;
    },
    getConfirmTemplate: function () {
        return '<div class="pop-box-dialog">' +
            '<div class="pop-box-content">' +
            '<div class="pop-box-header">' +
            '<span class="pop-box-close-btn">×</span>' +
            '<span class="pop-box-title">' +
            '<span >' + this.textTemplate.title + '</span>' +
            '</span>' +
            '</div>' +
            '<div class="pop-box-text">' +
            '<span>' + this.textTemplate.content + '</span>' +
            '</div>' +
            '<div class="pop-box-footer">' +
            '<button class="btn-footer btn-left-footer btn-footer-cancel">' + this.textTemplate.cancelBtn + '</button>' +
            '<button class="btn-footer btn-right-footer btn-footer-ok">' + this.textTemplate.okBtn + '</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    },
    getToastTemplate: function () {
        return '<span>' + this.textTemplate.content + '</span>';
    },
    alert: function (opt) {
        this.textTemplate.title = opt.title;
        this.textTemplate.content = opt.content;
        this.textTemplate.okBtn = opt.okBtn || this.textTemplate.okBtn;
        var box = document.createElement("div"),
            _this = this;
        box.className = this.containerClass;
        box.id = this.containerId;
        box.innerHTML = this.getAlertTemplate();
        this.box = box;
        document.body.appendChild(this.box);
        var btn = document.getElementsByClassName('btn-footer-ok');
        btn[btn.length - 1].focus();
        btn[btn.length - 1].onclick = function () {
            if (opt.onConfirm) {
                opt.onConfirm();
            }
            _this.removeBox();
        }
    },
    confirm: function (opt) {
        this.textTemplate.title = opt.title;
        this.textTemplate.promptPlaceholder = opt.promptPlaceholder || this.textTemplate.promptPlaceholder;
        this.textTemplate.okBtn = opt.okBtn || this.textTemplate.promptOkBtn;
        this.textTemplate.cancelBtn = opt.cancelBtn || this.textTemplate.cancelBtn;
        this.textTemplate.content = opt.content || this.textTemplate.content;
        var box = document.createElement("div"),
            _this = this;
        this.box = box;
        box.className = this.containerClass;
        box.id = this.containerId;
        box.innerHTML = this.getConfirmTemplate();
        document.body.appendChild(box);
        var okBtn = document.getElementsByClassName('btn-footer-ok');
        okBtn[okBtn.length - 1].focus();
        okBtn[okBtn.length - 1].onclick = function () {
            if (opt.onConfirm) {
                opt.onConfirm();
            }
            _this.removeBox();
        }
        var cancelBtn = document.getElementsByClassName('btn-footer-cancel');
        cancelBtn[cancelBtn.length - 1].onclick = function () {
            if (opt.onCancel) {
                opt.onCancel();
            }
            _this.removeBox();
        }
    },
    toast: function (opt){
        this.textTemplate.content = opt.content || this.textTemplate.content;
        this.textTemplate.hidetime = opt.hidetime || this.textTemplate.hidetime;
        this.textTemplate.toasttop = opt.toasttop || this.textTemplate.toasttop;
        var box = document.createElement("div"),
            _this = this;
        this.box = box;
        box.className = this.toastClass;
        box.id = this.containerId;
        box.style.top = this.textTemplate.toasttop;
        box.innerHTML = this.getToastTemplate();
        document.body.appendChild(box);
        setTimeout(function(){
            _this.removeBox();
        },this.textTemplate.hidetime);
    },
    colse: function () {
        this.removeBox();
    },
    removeBox: function () {
        var box = document.getElementById("pop-box");
        var classVal = document.getElementById("pop-box").getAttribute("class");
        classVal = classVal.replace("fadeIn","fadeOut");
        document.getElementById("pop-box").setAttribute("class",classVal);
        setTimeout(function(){
            document.body.removeChild(box);
        },900);
    }
};

export { Dialog }

