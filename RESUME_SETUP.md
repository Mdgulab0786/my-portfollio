# Resume Download Setup

## 📁 How to Add Your Resume PDF

### Step 1: Create Assets Folder
Create folder structure in your VS Code:
```
client/public/assets/
```

### Step 2: Add Your Resume PDF
1. Copy your resume PDF file 
2. Rename it to `resume.pdf`
3. Place it in `client/public/assets/resume.pdf`

### Step 3: Update Download Name
In `client/src/components/hero-section.tsx`, line 36:
```javascript
link.download = 'Your_Name_Resume.pdf';
```
Change `Your_Name_Resume.pdf` to your actual name like `Rahul_Sharma_Resume.pdf`

## 🔧 Alternative: Dynamic Resume Route

If you want to serve resume through backend:

### Backend Route (server/routes.ts):
```javascript
app.get('/api/resume', (req, res) => {
  const filePath = path.join(__dirname, '../client/public/assets/resume.pdf');
  res.download(filePath, 'Your_Name_Resume.pdf');
});
```

### Frontend Update:
```javascript
onClick={() => {
  window.open('/api/resume', '_blank');
}}
```

## 📋 Current Status:
- ✅ Download button is functional
- ✅ Will download file as `Your_Name_Resume.pdf`
- ⚠️ You need to add your actual resume PDF file

## 🎯 Next Steps:
1. Add your resume PDF to `client/public/assets/resume.pdf`
2. Update the download filename in hero-section.tsx
3. Test the download functionality

The download button will work once you add your PDF file!