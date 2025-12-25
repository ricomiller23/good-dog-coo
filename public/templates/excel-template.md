# JUST AZC Revenue Model - Excel Template

## Sheet Layout and Organization

### 1. Named Ranges
```
Market_Assumptions    = Assumptions!B4:B15
Fee_Structure        = Assumptions!E4:G15
Growth_Rates         = Assumptions!J4:J15
Operating_Costs      = Assumptions!M4:M15
Monthly_Users        = Users!B4:M15
Transaction_Volume   = Transactions!B4:M15
Revenue_Calc         = Revenue!B4:M15
```

### 2. Sheet: Assumptions
```
Location: A1
Format: Title with merged cells A1:N1
Style: Bold, 14pt, Center aligned

A3:N3: Headers with the following columns:
A: Metric
B: Value
C: Unit
D: Source
E-G: Fee Structure (Tier 1, Tier 2)
H: Notes
I: Growth Assumptions
J: Value
K: Unit
L: Operating Metrics
M: Value
N: Unit

Key Formulas:
B4 (Total Market Size) = 48677
B5 (Growth Rate) = 18.9%
B6 (Initial Adoption) = 25%
B7 (Tier 1 Ratio) = 70%
B8 (Avg Transaction) = 84.50
B9 (Monthly Transactions) = 3200000

Fee Structure:
E4:F4 = {"Tier 1", "Tier 2"}
E5:F5 = {1%, 1%}  // Transfer Fee
E6:F6 = {2.5%, 2.5%}  // Marketplace Sell
E7:F7 = {5%, 5%}  // Treasury Redemption
E8:F8 = {1%, "N/A"}  // Cash Onboarding
```

### 3. Sheet: Users
```
Location: A1
Title: "User Growth Projection"

Column Headers (A3:M3):
Month, Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec

Row Headers (A4:A15):
- Total Addressable Market
- Adoption Rate
- New Users
- Churned Users
- Net Users
- Cumulative Users
- Tier 1 Users
- Tier 2 Users

Key Formulas:
B4 (TAM) = =Assumptions!B4*(1+Assumptions!B5)^(MONTH(B3)/12)
B5 (Adoption) = =IF(B3=DATE(2024,1,1),Assumptions!B6,B5*1.1)
B6 (New Users) = =B4*B5
B7 (Churn) = =IF(B3>DATE(2024,1,1),LAG(B8)*0.02,0)
B8 (Net Users) = =B6-B7
B9 (Cumulative) = =IF(B3=DATE(2024,1,1),B8,LAG(B9)+B8)
B10 (Tier 1) = =B9*Assumptions!B7
B11 (Tier 2) = =B9*(1-Assumptions!B7)
```

### 4. Sheet: Transactions
```
Location: A1
Title: "Transaction Volume Analysis"

Columns (A3:M3): Same month headers as Users sheet

Row Categories:
A4:A20 = Transaction Types:
- Marketplace Buy
- Treasury Buy
- Transfer
- Marketplace Sell
- Treasury Redemption
- Cash Onboarding
- Total Transactions

Key Formulas:
B4 (Marketplace Buy Volume) = =Users!B10*100*Assumptions!B8
B5 (Treasury Buy Volume) = =Users!B10*50*Assumptions!B8
B6 (Transfer Volume) = =(Users!B10+Users!B11)*75*Assumptions!B8
[Continue for each transaction type]

Seasonal Adjustments:
Apply monthly factors using CHOOSE(MONTH(B3), 1, 0.9, 1.1, etc.)
```

### 5. Sheet: Revenue
```
Location: A1
Title: "Revenue Calculations"

Structure follows Transaction sheet with revenue calculations:

Key Formulas:
B4 (Marketplace Buy Revenue) = =Transactions!B4*Assumptions!E5
B5 (Treasury Buy Revenue) = =Transactions!B5*Assumptions!E5
[Continue for each revenue stream]

Summary Rows:
Total Revenue = SUM(B4:B20)
Monthly Growth = (B24/LAG(B24)-1)
YoY Growth = (B24/OFFSET(B24,-12,0)-1)
```

### 4. Formatting Rules

#### General Formatting
```
Currency Format: $#,##0.00
Percentage Format: 0.00%
Numbers Format: #,##0
Dates Format: mmm-yy

Headers:
- Background: #F4F4F4
- Font: Arial, 10pt, Bold

Data Cells:
- Font: Arial, 10pt
- Negative numbers in red

Conditional Formatting:
1. Growth Rates
- Positive: Green
- Negative: Red

2. User Changes
- Growth > 10%: Green background
- Decline: Red background

3. Revenue Targets
- Above target: Green
- Below target: Yellow
- Significantly below: Red
```

Would you like me to:
1. Add more detailed formulas for specific calculations?
2. Provide additional conditional formatting rules?
3. Include more summary statistics or KPIs?
4. Create specific pivot table layouts?

## Pivot Tables and Dashboard

### 1. Revenue Analysis Pivot
```
Source Data: Revenue!A4:M20
Rows: Transaction Type
Columns: Month
Values: 
- Sum of Revenue
- % of Total Revenue
- YoY Growth

Filters:
- Year
- Quarter
- Transaction Type
```

### 2. User Growth Dashboard
```
Components:
1. Line Chart: User Growth Trend
   - X-Axis: Months
   - Y-Axis: Number of Users
   - Series: Total Users, Tier 1, Tier 2

2. Pie Chart: User Distribution
   - Tier 1 vs Tier 2 Users

3. Bar Chart: Monthly New Users
   - X-Axis: Months
   - Y-Axis: Number of New Users
   - Overlay: Churn Rate

4. KPI Dashboard:
   - MTD Revenue
   - YTD Revenue
   - User Growth Rate
   - Average Revenue Per User
   - Churn Rate
```

### 3. Transaction Analysis
```
Pivot Table Layout:
Rows: Transaction Type
Columns: Month
Values:
- Transaction Count
- Transaction Volume
- Average Transaction Size
- Revenue Generated

Slicers:
- Date Range
- User Tier
- Transaction Type
```

### 4. Macro Setup
```vba
Sub UpdateDashboard()
    ' Refresh all pivot tables
    ActiveWorkbook.RefreshAll
    
    ' Update charts
    Call UpdateCharts
    
    ' Calculate KPIs
    Call CalculateKPIs
End Sub

Sub UpdateCharts()
    ' Code to update chart ranges based on new data
End Sub

Sub CalculateKPIs()
    ' Code to refresh KPI calculations
End Sub
```
