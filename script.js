document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contactForm");

    const sendFormDataToEmail = async (formData) => {
        try {
            const response = await fetch("https://your-backend-endpoint.com/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form data sent successfully.");
            } else {
                console.error("Failed to send form data.");
            }
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    };

    if (contactForm) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const formData = {
                name: contactForm.querySelector("#name").value,
                email: contactForm.querySelector("#email").value,
                message: contactForm.querySelector("#message").value,
            };

            await sendFormDataToEmail(formData);

            alert("Thank you! We will reach out to you soon.");
            contactForm.reset();
        });
    }
});
