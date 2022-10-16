from lib2to3.pgen2 import driver
import numpy as np
import pandas as pd

"""Importing the relevant files """ 

# Importing the drivers data file
drivers = pd.read_csv('drivers.csv')
# Importing the races data file
races = pd.read_csv('races.csv')
# Importing the results data file
results = pd.read_csv('results.csv')
# Importing the sprint data file
sprint = pd.read_csv('sprint_results.csv')
# Importing the lap_times data file
lap_times = pd.read_csv('lap_times.csv')

"""Filtering the data pertaining to the 2021 season"""
races_2021 = races[races['year']==2021]

"""Merging the results data file with the races_2021 data file"""
races_2021 = races_2021.merge(results, left_on='raceId', right_on='raceId', how='inner')

"""Merging the drivers data file with the races_2021 data file"""
races_2021 = races_2021.merge(drivers, left_on='driverId', right_on='driverId', how='inner')

""" Obtaining the necessary fields from the sprint data frame"""
sprint = sprint[['raceId','driverId','points']]

""" Renaming the column sprint_points as points """
sprint = sprint.rename(columns={
    'points': 'sprint_points'
})


races_2021 = pd.merge(races_2021, sprint, on=['raceId', 'driverId'], how='left')
races_2021['sprint_points'] = races_2021['sprint_points'].apply(lambda x: 0 if (x!=0 and x!=1 and x!=2 and x!=3) else x)
races_2021['sprint_points'].apply(lambda x: x)
races_2021['total_points'] = races_2021['points'] + races_2021['sprint_points']

# Filtering the data pertaining to the drivers
ver = races_2021[races_2021['code'] == 'VER']       # Filtering the results for verstappen
ham = races_2021[races_2021['code'] == 'HAM']       # Filtering the results for hamilton
bot = races_2021[races_2021['code'] == 'BOT']       # Filtering the results for bottas
per = races_2021[races_2021['code'] == 'PER']
sai = races_2021[races_2021['code'] == 'SAI']
nor = races_2021[races_2021['code'] == 'NOR']
lec = races_2021[races_2021['code'] == 'LEC']
ric = races_2021[races_2021['code'] == 'RIC']
gas = races_2021[races_2021['code'] == 'GAS']
alo = races_2021[races_2021['code'] == 'ALO']


# Sorting the race rounds starting from the first round of 2021 to the last round of 2021
ver = ver.sort_values(by = ['round'])
ham = ham.sort_values(by = ['round'])
bot = bot.sort_values(by = ['round'])
per = per.sort_values(by = ['round'])
sai = sai.sort_values(by = ['round'])
nor = nor.sort_values(by = ['round'])
lec = lec.sort_values(by = ['round'])
ric = ric.sort_values(by = ['round'])
gas = gas.sort_values(by = ['round'])
alo = alo.sort_values(by = ['round'])

driver_names = ["ver","ham","bot","per","sai","nor","lec","ric","gas","alo"]

# Creating a cumulative sum column for total points throughout the season
print(ver['points'])

ver['season_points'] = ver['points'].cumsum()
ham['season_points'] = ham['points'].cumsum()
bot['season_points'] = bot['points'].cumsum()
per['season_points'] = per['points'].cumsum()
sai['season_points'] = sai['points'].cumsum()
nor['season_points'] = nor['points'].cumsum()
lec['season_points'] = lec['points'].cumsum()
ric['season_points'] = ric['points'].cumsum()
gas['season_points'] = gas['points'].cumsum()
alo['season_points'] = alo['points'].cumsum()

# Creating a list of data frames 
dfs = [ver, ham, bot, per, sai, nor, lec, ric, gas, alo]

test_3 = pd.concat([ver, ham, bot, per, sai, nor, lec, ric, gas, alo], ignore_index=True)
# Removing unnecessary data to avoid cluttering 
# test_3.drop(test_3.iloc[:, 5:39], inplace=True, axis=1)

# test_3 = test_3.drop(['year','circuitId', 'dob','nationality'], axis=1)
# print(test_3)

# Evaluating the maximum value in the Fastest Lap category

test_3.to_csv('.csv',index = False)

# Dropping columns that aren't required 
test_3.to_csv('2021_driver_data.csv',index = False)








