import numpy as np
import pandas as pd

circuits = pd.read_csv('circuits.csv')
races = pd.read_csv('races.csv')

# Merging the data
races_2021 = races[races['year'] == 2021]
# Removing unwanted data from the data frame
races_2021 = races_2021.drop(["date","time","url","fp1_date","fp1_time","fp2_date","fp2_time","fp3_date","fp3_time","quali_date","quali_time","sprint_date","sprint_time"],axis = 1)
# Merging the circuit data to include only 2021 races
circuits_2021 = circuits.merge(races_2021, left_on = 'circuitId', right_on ='circuitId', how = 'inner')
# Removing unwanted data from the data frame
circuits_2021 = circuits_2021.drop(["alt","url"],axis = 1)
print(circuits_2021)
# Saving the filtered data to a new csv file
circuits_2021.to_csv('2021_circuits.csv', index = False)

