window.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("mouseup", (e) => {
        if (!e.target.closest(".checkbox")) return;
        const checkbox = e.target.closest('.checkbox');
        const isDisabled = checkbox.classList.contains('disabled')
        if(isDisabled) {
            return e.preventDefault();
        }
        const isChecked = checkbox.classList.contains('state_checked');

        if(isChecked) {
            checkbox.classList.remove('state_checked');
        }else {
            checkbox.classList.add('state_checked');
        }
    });
});