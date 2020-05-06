import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { createGrid } from 'reducers';

import { Button } from 'components';

const NewButton: FC = () => {

    const dispatch = useDispatch<Dispatch<Action>>();

    const createNewGame = useCallback(() => {
        if (window.confirm("Are you sure?")) {
            dispatch(createGrid())
        }
    }, [dispatch])

    return <Button onClick={createNewGame}>New Game</Button>
}

export default NewButton;