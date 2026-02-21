<img width="1440" height="778" alt="Screen Shot 2026-02-21 at 7 37 29 pm" src="https://github.com/user-attachments/assets/dd60ebea-d56b-4967-911a-e4975c112f37" /># Dictionary Web App

A simple full-stack dictionary web application built with **Node.js** and **Express.js**, using **EJS** for server-side rendering. It integrates **WordsAPI** via **Axios** to fetch word definitions and related linguistic data through REST API calls.

## Demo
- Live demo: https://dictionary-s8fn.onrender.com/

## Features
- Search for a word and display results from **WordsAPI**
- Clean server-side rendered UI with **EJS**
- Handles loading states and common error cases (e.g., word not found / API error)
- Input validation to prevent empty/invalid searches

## Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** EJS, CSS, JavaScript
- **API / HTTP:** Axios, WordsAPI (REST)
- **VERSION CONTROL:** Git

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A WordsAPI key from RapidAPI / WordsAPI provider

### Installation
```bash
git clone https://github.com/nam643/dictionary.git
cd dictionary
npm install
