# ☁️ Cloud Cost Calculator

A simple web application for estimating cloud infrastructure costs based on the number of instances, hourly cost, and daily usage.

## 🚀 Features

- Calculate estimated daily cloud costs
- Calculate estimated monthly cloud costs
- Configure the number of instances
- Enter custom hourly pricing
- Set daily usage between 1 and 24 hours
- Simple and responsive user interface
- AWS Region Selection
- EC2 Instance Type Selection
- Monthly Cost Estimation
- Yearly Cost Estimation
- Cost Summary Dashboard
- Responsive Design

## 🧮 How It Works

The calculator uses the following logic:

```text
Daily Cost = Number of Instances × Hourly Cost × Hours per Day

Monthly Cost = Daily Cost × 30
```

### Example

```text
Number of Instances: 2
Hourly Cost: $0.0116
Hours per Day: 8

Daily Cost: $0.19
Monthly Cost: $5.57
```

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## 📁 Project Structure

```text
cloud-cost-calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🎯 Project Goals

This project was created to practice:

- Building a simple web application
- Working with HTML, CSS, and JavaScript
- Using Git branches
- Working with feature-based development
- Creating Pull Requests
- Practicing GitHub workflows

## 🔮 Future Improvements

- Add multiple cloud providers
- Add predefined instance pricing
- Add yearly cost estimation
- Add currency selection
- Add dark mode
- Improve cost visualization with charts

## 📌 Disclaimer

This calculator provides simple cost estimates based on manually entered hourly pricing. It does not represent official or real-time pricing from any cloud provider.

---

⭐ Built as part of my continuous Cloud & DevOps learning journey.