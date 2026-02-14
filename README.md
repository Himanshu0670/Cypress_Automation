# MDR Web Automation – Cypress

## 📌 Project Overview
This repository contains Cypress end-to-end automation scripts for the Medical Disability Registry (MDR) Web platform developed for the Ministry of Health, Vanuatu.
The automation suite validates critical healthcare workflows across a multi-organization system.

---

## 🚀 Test Coverage

The framework automates the following workflows:

- User creation and role-based access validation  
- Multiple patient registration and management  
- Disability assessments  
- Medical assessments  
- Allied health assessments  
- Assistive device recommendation workflows  

---

## 🏥 Business Context

The MDR system enables healthcare providers to:

- Register and manage patients  
- Perform structured disability evaluations  
- Conduct medical and allied health assessments  
- Recommend appropriate assistive devices  

---

## 🛠️ Tech Stack

- Cypress  
- JavaScript  
- Web-based Healthcare Platform  

---

# 💻 Complete Setup Guide

## Download the Project

### Option A: Clone using Git

```bash
git clone <your-repository-url>
cd <project-folder-name>
```
### Option B: Download ZIP
- Click Code
- Select Download ZIP
- Extract the folder on your system

## Install Node.js (If Not Installed)

Download Node.js from:
`https://nodejs.org/`

### Verify installation:
``` bash
node -v
npm -v
```

## Open Project in VS Code
- Open VS Code
- Click File → Open Folder
- Select the project folder

## Install Project Dependencies
- Inside VS Code terminal:
``` bash
npm install

```
`This installs all dependencies listed in package.json.`

## Install Cypress (If Not Installed)
If Cypress is not already present:
``` bash
npm install cypress --save-dev
```

## ▶️ How to Run Tests

1. Open Cypress Test Runner::
```bash
   npx cypress open
```

2. Run tests:
```bash
   npx cypress run
