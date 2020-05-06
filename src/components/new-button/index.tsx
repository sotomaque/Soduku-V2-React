import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { createGrid } from 'reducers';

import global from 'global';

import { Button } from 'components';

const NewButton: FC = () => {

    const dispatch = useDispatch<Dispatch<Action>>();

    const createNewGame = useCallback(() => {
        if (window.confirm("Are you sure?")) {
            dispatch(createGrid())
            global.hasWon = true
        }
    }, [dispatch])

    return <Button onClick={createNewGame}>New Game</Button>
}

export default NewButton;