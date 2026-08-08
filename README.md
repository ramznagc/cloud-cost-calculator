# ☁️ Cloud Cost Calculator

A lightweight web-based calculator for estimating AWS EC2 infrastructure costs.

## 🚀 Features

- EC2 hourly cost estimation
- Daily cost calculation
- Monthly cost calculation
- Yearly cost calculation
- Multiple instance types
- EC2 cost comparison
- Responsive interface
- No backend required

---

## 📊 Supported Instances

| Instance | Hourly Cost | Approx. Monthly |
|---|---:|---:|
| t3.micro | $0.0104 | $7.49 |
| t3.small | $0.0208 | $14.98 |
| t3.medium | $0.0416 | $29.95 |
| t3.large | $0.0832 | $59.90 |

> Pricing values are example estimates and should be verified against current AWS pricing before making deployment decisions.

---

## 🧮 Calculation Logic

The calculator estimates:

```text
Daily Cost =
Hourly Cost × Instances × Hours Per Day
```

```text
Monthly Cost =
Daily Cost × 30
```

```text
Yearly Cost =
Daily Cost × 365
```

---

## 🛠 Technologies

- HTML5
- CSS3
- JavaScript
- AWS EC2 pricing concepts

---

## 📂 Project Structure

```text
cloud-cost-calculator
│
├── index.html
├── script.js
├── style.css
└── README.md
```

---

## ▶️ Run Locally

Clone the repository:

```bash
git clone https://github.com/ramznagc/cloud-cost-calculator.git
```

Enter the project:

```bash
cd cloud-cost-calculator
```

Open:

```text
index.html
```

in your browser.

No backend or package installation is required.

---

## 🎯 Project Goal

The goal of this project is to build a simple tool for understanding and estimating cloud infrastructure costs while practicing frontend development and cloud concepts.

---

## 🔮 Future Improvements

- AWS Pricing API integration
- More EC2 instance families
- EBS cost calculation
- S3 cost estimation
- Load Balancer cost estimation
- Multi-service cost estimation
- Cost visualization charts
- AWS Region comparison

---

## 👨‍💻 Author

**Ramazan**

AWS • Linux • DevOps • Cloud

Building cloud projects and documenting practical infrastructure concepts.