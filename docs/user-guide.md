# User Guide - Registered Letters Slip Register

## Table of Contents
1. [Getting Started](#getting-started)
2. [Adding a New Letter](#adding-a-new-letter)
3. [Viewing Letters](#viewing-letters)
4. [Updating Status](#updating-status)
5. [Exporting Data](#exporting-data)
6. [Troubleshooting](#troubleshooting)

## Getting Started

### First Time Setup
1. Download or clone the repository
2. Open `index.html` in your web browser
3. No installation required!

### Understanding the Interface
The application has three main sections:
- **Entry Form** (Top): Add new registered letters
- **Dashboard** (Middle): View summary statistics
- **Records Table** (Bottom): Browse all entries

## Adding a New Letter

### Step-by-Step Process
1. **Fill in the form** with letter details:
   - Slip Number: The tracking number from the post office slip (Required)
   - Date Received: Auto-filled to today's date (Required)
   - Sender: Who sent the letter (Required)
   - Receiver: Who should receive it (Required)
   - Post Office: Where it came from (Optional)
   - Status: Current status (Required)
   - Collection Details: Fill when letter is collected
   - Remarks: Any additional notes

2. **Click "Save Entry"** to add to the register

### Status Options
- **Received**: Letter is in your possession
- **Pending**: Awaiting collection by recipient
- **Collected**: Recipient has collected the letter

## Viewing Letters

### Using the Table
- Scroll through all entries
- Sort by clicking column headers
- Use browser search (Ctrl+F) to find specific entries

### Viewing Details
Click the 👁️ (eye) icon next to any entry to see full details.

## Updating Status

### Mark as Collected
1. Find the letter in the table
2. Click the ✏️ (edit) icon
3. Change status to "Collected"
4. Add collection date and collector name
5. Click "Save Entry"

### Edit Other Details
Use the same edit process to correct any information.

## Exporting Data

### Export to CSV
1. Click "Export to CSV" button
2. File will download automatically
3. Open in Excel, Google Sheets, or any spreadsheet software

### CSV File Contents
The exported file contains all data fields:
- Slip Number, Date Received, Sender, Receiver
- Post Office, Status, Date Collected, Collected By
- Remarks, Description

## Best Practices

### Daily Routine
1. Open the register each morning
2. Add new letters as they arrive
3. Update statuses as letters are collected
4. Export weekly backups

### Data Accuracy Tips
- Double-check slip numbers
- Always record the exact date received
- Update status promptly when collected
- Add helpful remarks for future reference

## Troubleshooting

### Common Issues

**Problem**: Data disappears after refreshing
**Solution**: This version uses browser memory only. For permanent storage, consider:
- Exporting regularly
- Implementing a backend solution
- Using browser localStorage version

**Problem**: Form won't submit
**Solution**: Check that all required fields (marked with *) are filled

**Problem**: Date format issues
**Solution**: The application uses YYYY-MM-DD format. Stick to this format for consistency.

### Browser Compatibility
If experiencing issues:
- Use Chrome, Firefox, or Edge
- Clear browser cache
- Disable ad blockers for local files

## Advanced Features (Future)

Planned enhancements:
- Search and filter functionality
- Barcode scanning for slip numbers
- Email notifications for pending letters
- Multi-user support with authentication
- Cloud backup integration

## Support

For additional help:
1. Check the README.md file
2. Review this user guide
3. Contact your system administrator
4. Report bugs via GitHub Issues

---

**Remember**: Regular exports are your backup. Make them frequently!
