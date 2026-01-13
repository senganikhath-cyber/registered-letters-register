# Registered Letters Slip Register

A digital register for tracking registered letters received from the post office. This web application provides a comprehensive system to log, track, and manage all registered letters with detailed records.

## Features

- 📝 **Add New Entries** - Record all details of registered letters
- 📊 **Dashboard** - Visual summary with counts of letters by status
- 🔍 **View & Search** - Easy access to all registered letter records
- ✏️ **Edit & Update** - Modify existing entries as needed
- 🗑️ **Delete Records** - Remove outdated or incorrect entries
- 📥 **Export Data** - Export all records to CSV format
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎨 **Clean Interface** - User-friendly and intuitive layout

## Status Tracking

- **Received** - Letter received at the office
- **Pending** - Awaiting collection by recipient
- **Collected** - Successfully collected by recipient

## Data Fields Captured

1. Slip Number (Unique identifier from post office)
2. Date Received
3. Sender Name/Organization
4. Receiver Name
5. Post Office Name
6. Letter Status
7. Date Collected
8. Collected By
9. Remarks/Notes
10. Letter Description

## Installation & Usage

### Option 1: Direct Use
Simply open `index.html` in any modern web browser.

### Option 2: Local Server (Recommended)
For better functionality:

```bash
# Using Python
python -m http.server 8000

# Using Node.js with http-server
npx http-server
```
