import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowSuccess = msg => {
    toast.success(msg)
}

const ShowWarning = msg => {
    toast.warn(msg)
}

const ShowInfo = msg => {
    toast.info(msg)
}

const ShowError = msg => {
    toast.error(msg)
}

export const Notification = {
    ShowWarning: ShowWarning,
    ShowError: ShowError,
    ShowSuccess: ShowSuccess,
    ShowInfo: ShowInfo
}