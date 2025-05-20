
let currentPolicies = {
    version: 1,
    policies: []
};


function loadJsonFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            currentPolicies = JSON.parse(e.target.result);
            renderPolicies();
        } catch (error) {
            console.error('Error parsing JSON file:', error);
            alert('Error: The selected file is not a valid JSON file.');
        }
    };
    reader.onerror = function() {
        console.error('Error reading file:', reader.error);
        alert('Error reading the file. Please try again.');
    };
    reader.readAsText(file);
}


function renderPolicies() {
    const policiesList = document.getElementById('policiesList');
    policiesList.innerHTML = '';

    if (!currentPolicies.policies || currentPolicies.policies.length === 0) {
        policiesList.innerHTML = '<div class="alert alert-info">No policies found. Add some using the form above.</div>';
        return;
    }

    currentPolicies.policies.forEach((policy, index) => {
        const policyCard = document.createElement('div');
        policyCard.className = 'policy-card';
        policyCard.innerHTML = `
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <strong>URL Host:</strong> <span class="url-input">${policy.urlHost}</span><br>
                    <strong>Policy Type:</strong> ${policy.policyType}
                </div>
                <div>
                    <button class="btn btn-sm btn-danger" onclick="deletePolicy(${index})">Delete</button>
                </div>
            </div>
        `;
        policiesList.appendChild(policyCard);
    });
}


function addPolicy(event) {
    event.preventDefault();
    
    const urlHost = document.getElementById('urlHost').value.trim();
    const policyType = document.getElementById('policyType').value;

    if (!urlHost) {
        alert('Please enter a URL host');
        return;
    }

    if (!currentPolicies.policies) {
        currentPolicies.policies = [];
    }

    currentPolicies.policies.push({
        urlHost,
        policyType
    });

    renderPolicies();
    document.getElementById('addPolicyForm').reset();
}


function deletePolicy(index) {
    if (confirm('Are you sure you want to delete this policy?')) {
        currentPolicies.policies.splice(index, 1);
        renderPolicies();
    }
}


async function saveJsonFile() {
    try {
        const blob = new Blob([JSON.stringify(currentPolicies, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'UrlWhitelist.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
    } catch (error) {
        console.error('Error saving JSON file:', error);
        alert('Error saving the JSON file');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('jsonFileInput').addEventListener('change', loadJsonFile);
    document.getElementById('addPolicyForm').addEventListener('submit', addPolicy);
    document.getElementById('saveButton').addEventListener('click', saveJsonFile);
}); 