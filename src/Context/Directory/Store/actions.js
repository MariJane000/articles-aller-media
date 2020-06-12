import {
    SET_DIRECTORY_LOADER,
    SET_DIRECTORY,
    SET_MODAL_LOADER,
} from './constants';

export const setDirectoryLoader = (directoryLoader) => ({
    type: SET_DIRECTORY_LOADER,
    directoryLoader,
});

export const setDirectory = (directory) => ({
    type: SET_DIRECTORY,
    directory,
});

export const setModalLoader = (modalLoader) => ({
    type: SET_MODAL_LOADER,
    modalLoader,
});