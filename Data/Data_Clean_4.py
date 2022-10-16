import numpy as np
import pandas as pd

drivers = pd.read_csv('formula1_2021season_drivers.csv')
drivers.set_index('Abbreviation', inplace=True)
teams = pd.read_csv('formula1_2021season_teams.csv')
teams.index = range(1,11)
sprintQualiResults = pd.read_csv('formula1_2021season_sprintQualifyingResults.csv')
raceResults = pd.read_csv('formula1_2021season_raceResults.csv')



verPts = raceResults[raceResults['Driver'] == 'Max Verstappen']['Points'].values
verPts[9] += 3;  verPts[13] += 2;  verPts[18] += 2
hamPts = raceResults[raceResults['Driver'] == 'Lewis Hamilton']['Points'].values
hamPts[9] += 2
pointsGap = np.cumsum(verPts) - np.cumsum(hamPts)

pointsGap = pointsGap.astype(int)


driver = []
driverid = []


for i in range(len(pointsGap)):
    if pointsGap[i] >= 0:   driver.append('Verstappen'), driverid.append(33)
    else:    driver.append('Hamilton'), driverid.append(44)

pointsGap = np.absolute(pointsGap)
print(driver)
print(driverid)

# Converting the list into a dataframe
driver_df = pd.DataFrame(driver,columns = ['surname'])
driver_id = pd.DataFrame(driverid,columns = ['driverId'])

print(driver_df)



pointsGapdf = pd.DataFrame(pointsGap,columns = ['Points_Gap'])

Tracks = raceResults.loc[:,'Track']
Tracks = Tracks.to_frame()
Tracks = Tracks.drop_duplicates(subset="Track",)
Tracks = Tracks.reset_index()


# Appending all three dataframes together
# Place the dataframes side by side
df = pd.concat([Tracks, pointsGapdf, driver_df,driver_id],axis = 1)

df.drop(columns = ['index'])

print(df)

# Converting the data frame to a csv file
df.to_csv('ver_ham_point_gap.csv', index = False)




