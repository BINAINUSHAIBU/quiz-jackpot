document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const role = document.getElementById('role').value;
            if (role === 'admin') {
                window.location.href = 'admin-dashboard.html';
            } else {
                window.location.href = 'user-dashboard.html';
            }
        });
    }

    const currentPath = window.location.pathname;
    if (currentPath.includes('admin-dashboard.html')) {
        showSection('general-settings');
    } else if (currentPath.includes('user-dashboard.html')) {
        showSection('user-settings');
    }
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function addQuiz() {
    // Implement add quiz functionality here
    alert('Add Quiz functionality');
}

function deleteQuiz() {
    // Implement delete quiz functionality here
    alert('Delete Quiz functionality');
}

function addUser() {
    // Implement add user functionality here
    alert('Add User functionality');
}

function deleteUser() {
    // Implement delete user functionality here
    alert('Delete User functionality');
}

function submitQuiz() {
    // Implement quiz submission functionality here
    alert('Quiz submitted');
}
