document.addEventListener("DOMContentLoaded", function() {
    
    let notificationCounter = 0;
    let notificationNumber = 0;
    updateCounter();
    let intervalId = setInterval(createNotification, 3000);

    let bell = document.querySelector(".navigation-list-bell");
    bell.addEventListener("click", function() {
        clearInterval(intervalId);
        setTimeout(() => {
            intervalId = setInterval(createNotification, 3000);
        }, 10000);
    });

    function createNotification() {
        notificationNumber++;
        notificationCounter++;
        let notificationList = document.querySelector(".notification-list");

        let newNotification = document.createElement("li");
        newNotification.className = "notification-item";
        
        let notificationParagraph = document.createElement("p");
        notificationParagraph.className = "notification-paragraph";
        notificationParagraph.textContent = "Уведомление " + notificationNumber;
        newNotification.appendChild(notificationParagraph);

        let closeButton = document.createElement("div");
        closeButton.className = "notification-close";
        newNotification.appendChild(closeButton);
        closeButton.addEventListener("click", function() {
            notificationList.removeChild(newNotification);
            notificationCounter--;
            updateCounter();
        });

        notificationList.appendChild(newNotification);

        updateCounter();
    }

    function updateCounter() {
        let counter = document.querySelector(".notification-counter");
        counter.textContent = notificationCounter;
    }
    
});