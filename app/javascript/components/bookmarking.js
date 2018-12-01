const bookMarks = document.querySelectorAll(".dev-bookmark i");

const toggleIcon = (elem) => {
    elem.classList.toggle("far");
    elem.classList.toggle("fas");
}

const initBookMark = () => {
    if (bookMarks) {
        bookMarks.forEach(bookMark => {
            let devId = (bookMark.parentNode.parentNode).getAttribute("id").replace('dev-', '');
            bookMark.addEventListener('click', function(event) {
                if (bookMark.classList.contains("far")) {
                    fetch('/bookmarked_developers', {
                        method: 'post',
                        body: JSON.stringify({developer_id: devId}),
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': Rails.csrfToken()
                        },
                        credentials: 'same-origin'
                      }).then(() => toggleIcon(bookMark))
                } else {
                    fetch('/bookmarked_developers/:' + devId, {
                        method: 'delete',
                        body: JSON.stringify({developer_id: devId}),
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': Rails.csrfToken()
                        },
                        credentials: 'same-origin'
                      }).then(() => toggleIcon(bookMark))
                }
            });
        })
    }
};

export { initBookMark };