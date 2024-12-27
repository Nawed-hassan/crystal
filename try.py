import matplotlib.pyplot as plt

# Data for the waste types
labels = ['Biodegradable waste', 'Non-biodegradable waste', 'Hazardous waste', 'E-waste and others']
sizes = [60, 30, 5, 5]
colors = ['#4caf50', '#ff9800', '#f44336', '#9e9e9e']

# Plotting the pie chart
plt.figure(figsize=(7, 7))
plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=140, colors=colors, wedgeprops={'edgecolor': 'black'})

# Adding a title
plt.title('Distribution of Waste Types')

# Display the chart
plt.show()
