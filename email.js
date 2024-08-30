document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("email-form");
    const emailList = document.getElementById("email-list");
    const emailView = document.getElementById("email-view");
    const backButton = document.getElementById("back");

    let emails = [];

    emailForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const to = document.getElementById("to").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const email = {
            to,
            subject,
            message
        };

        emails.push(email);
        updateEmailList();

        // Clear the form
        emailForm.reset();
    });

    function updateEmailList() {
        emailList.innerHTML = "";

        emails.forEach((email, index) => {
            const li = document.createElement("li");
            li.textContent = email.subject;
            li.addEventListener("click", function () {
                viewEmail(index);
            });
            emailList.appendChild(li);
        });
    }

    function viewEmail(index) {
        const email = emails[index];
        document.getElementById("view-to").textContent = "To: " + email.to;
        document.getElementById("view-subject").textContent = "Subject: " + email.subject;
        document.getElementById("view-message").textContent = "Message: " + email.message;

        emailForm.classList.add("hidden");
        emailView.classList.remove("hidden");
    }

    backButton.addEventListener("click", function () {
        emailForm.classList.remove("hidden");
        emailView.classList.add("hidden");
    });
});
