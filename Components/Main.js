import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Button, StyleSheet} from 'react-native';
import { Styles } from './Styles';
export const Main = props => {
  const [playerTurn, setPlayerTurn] = useState(true);
  const [values, setValues] = useState({
    v1: '',
    v2: '',
    v3: '',
    v4: '',
    v5: '',
    v6: '',
    v7: '',
    v8: '',
    v9: '',
  });
  const [color, setColor] = useState({
    c1: 'white',
    c2: 'white',
    c3: 'white',
    c4: 'white',
    c5: 'white',
    c6: 'white',
    c7: 'white',
    c8: 'white',
    c9: 'white',
  });
  const [arrX, setArrX] = useState([]);
  const [winX, setWinX] = useState(false);
  const [arrO, setArrO] = useState([]);
  const [winO, setWinO] = useState(false);
  const [gameWin, setGameWin] = useState(false);

  const winner = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
  ];
  const [winValues, setWinValues] = useState([]);
  const winCheck = () => {
    let checker = (arr, target) => target.every(v => arr.includes(v));
    winner.map(item => {
      if (checker(arrX, item)) {
        setWinX(true);
        setTurn('X Win!');
        setGameWin(prev => !prev);
        setWinValues(item);
      } else if (checker(arrO, item)) {
        setWinO(true);
        setTurn('O Win!');
        setGameWin(prev => !prev);
        setWinValues(item);
      }
      return item;
    });
  };

  useEffect(() => {
    const box1 = 'c' + winValues[0];
    const box2 = 'c' + winValues[1];
    const box3 = 'c' + winValues[2];
    console.log(box3);
    setColor({...color, [box1]: 'yellow', [box2]: 'yellow', [box3]: 'yellow'});
  }, [gameWin]);

  useEffect(() => {
    if (
      values.v1 !== '' &&
      values.v2 !== '' &&
      values.v3 !== '' &&
      values.v4 !== '' &&
      values.v5 !== '' &&
      values.v6 !== '' &&
      values.v7 !== '' &&
      values.v8 !== '' &&
      values.v9 !== ''
    ) {
      setTurn("It's Tie!");
    }
    winCheck();
  }, [playerTurn]);
  const [turn, setTurn] = useState('X Turn!');
  const playerFunc = box => {
    if (winX || winO) {
      return;
    }
    if (values[box] === '') {
      if (playerTurn) {
        setValues({...values, [box]: 'X'});
        setPlayerTurn(prev => !prev);
        setTurn('O Turn!');
        setArrX([...arrX, Number(box.slice(1, 2))]);
      } else {
        setValues({...values, [box]: 'O'});
        setPlayerTurn(prev => !prev);
        setTurn('X Turn!');
        setArrO([...arrO, Number(box.slice(1, 2))]);
      }
    }
  };
  const [resetButton, setResetButton] = useState(false);
  useEffect(() => {
    setPlayerTurn(true);
    setWinO(false);
    setWinX(false);
    setArrX([]);
    setArrO([]);
    setValues({
      v1: '',
      v2: '',
      v3: '',
      v4: '',
      v5: '',
      v6: '',
      v7: '',
      v8: '',
      v9: '',
    });
    setColor({
      c1: 'white',
      c2: 'white',
      c3: 'white',
      c4: 'white',
      c5: 'white',
      c6: 'white',
      c7: 'white',
      c8: 'white',
      c9: 'white',
    });
    setTurn('X Turn!');
  }, [resetButton]);

  const resetButtonFunc = () => {
    setResetButton(prev => !prev);
  };

  return (
    <>
      <View>
        <Text style={{fontSize: 40, marginLeft: 100, marginTop: 30}}>
          Tic Tac Toe
        </Text>
      </View>
      <View style={{marginTop: 100, marginLeft: 50}}>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={() => playerFunc('v1')}>
            <View
              style={[
                Styles.box,
                Styles.bottomRightBorder,
                {
                  backgroundColor: color.c1,
                },
              ]}>
              <Text style={Styles.textSize}>{values.v1}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => playerFunc('v2')}>
            <View
              style={[
                Styles.box,
                Styles.bottomRightBorder,
                {
                  backgroundColor: color.c2,
                },
              ]}>
              <Text style={Styles.textSize}>{values.v2}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => playerFunc('v3')}>
            <View
              style={[
                Styles.box,
                Styles.bottomBorder,
                {
                  backgroundColor: color.c3,
                },
              ]}>
              <Text style={Styles.textSize}>{values.v3}</Text>
            </View>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={() => playerFunc('v4')}>
            <View
              style={[
                Styles.box,
                Styles.bottomRightBorder,
                {
                  backgroundColor: color.c4,
                },
              ]}>
              <Text style={Styles.textSize}>{values.v4}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => playerFunc('v5')}>
            <View
              style={[
                Styles.box,
                Styles.bottomRightBorder,
                {
                  backgroundColor: color.c5,
                },
              ]}>
              <Text style={Styles.textSize}>{values.v5}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => playerFunc('v6')}>
            <View
              style={[
                Styles.box,
                Styles.bottomBorder,
                {
                  backgroundColor: color.c6,
                },
              ]}>
              <Text style={Styles.textSize}>{values.v6}</Text>
            </View>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={() => playerFunc('v7')}>
            <View
              style={[
                Styles.box,
                Styles.rightBorder,
                {
                  backgroundColor: color.c7,
                },
              ]}>
              <Text style={Styles.textSize}>{values.v7}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => playerFunc('v8')}>
            <View
              style={[
                Styles.box,
                Styles.rightBorder,
                {backgroundColor: color.c8},
              ]}>
              <Text style={Styles.textSize}>{values.v8}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => playerFunc('v9')}>
            <View style={[Styles.box, {backgroundColor: color.c9}]}>
              <Text style={Styles.textSize}>{values.v9}</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={{marginTop: 20, width: 100, marginLeft: 150}}>
        <Text style={{fontSize: 30}}>{turn}</Text>
        <Button title="Reset" color="black" onPress={resetButtonFunc} />
      </View>
    </>
  );
};