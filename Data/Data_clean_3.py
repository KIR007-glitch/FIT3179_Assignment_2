from copyreg import constructor
import numpy as np 
import pandas as pd 

# Importing the drivers data file
constructors = pd.read_csv('constructors.csv')
# Importing the races data file
races = pd.read_csv('races.csv')
# Importing the constructor results data file
constructor_results = pd.read_csv('constructor_results.csv')
# Importing the constructor standings data file
constructor_standings = pd.read_csv('constructor_standings.csv')


"""Filtering the data pertaining to the 2021 season"""
races_2021 = races[races['year']==2021]

races_2021 = races_2021.merge(constructor_results, left_on = 'raceId', right_on = 'raceId', how = 'inner')

races_2021 = races_2021.merge(constructors, left_on = 'constructorId', right_on = 'constructorId', how = 'inner' )






# Filtering the data pertaining to the top 10 teams and sorting them accordingly
will = races_2021[races_2021['constructorRef'] == 'williams']       # Filtering the results for verstappen
merc = races_2021[races_2021['constructorRef'] == 'mercedes']       # Filtering the results for hamilton
redb = races_2021[races_2021['constructorRef'] == 'red_bull' ]       # Filtering the results for bottas
alfa = races_2021[races_2021['constructorRef'] == 'alfa']
haas = races_2021[races_2021['constructorRef'] == 'haas']
mcla = races_2021[races_2021['constructorRef'] == 'mclaren']
alpi = races_2021[races_2021['constructorRef'] == 'alpine']
astm = races_2021[races_2021['constructorRef'] == 'aston_martin']
alph = races_2021[races_2021['constructorRef'] == 'alphatauri']
ferr = races_2021[races_2021['constructorRef'] == 'ferrari']

# Sorting the races according to the round number
# Sorting the race rounds starting from the first round of 2021 to the last round of 2021
will = will.sort_values(by = ['round'])
merc = merc.sort_values(by = ['round'])
redb = redb.sort_values(by = ['round'])
alfa = alfa .sort_values(by = ['round'])
haas = haas.sort_values(by = ['round'])
mcla = mcla.sort_values(by = ['round'])
alpi = alpi.sort_values(by = ['round'])
astm = astm.sort_values(by = ['round'])
alph = alph.sort_values(by = ['round'])
ferr = ferr.sort_values(by = ['round'])






constructor_data = pd.concat([will, merc, redb, alfa, haas, mcla, alpi, astm, alph, ferr], ignore_index=True)

constructor_data.drop(constructor_data.iloc[:, 5:18], inplace=True, axis=1)

constructor_data = constructor_data.drop(['year','circuitId', 'constructorResultsId','nationality','status','url_y'], axis=1)

constructor_data.to_csv('constructor_data.csv', index = False)

