import React from 'react'
import { AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger } from '../ui/alert-dialog';

interface ConfirmModalProps {
  children : React.ReactNode;
  OnConfirm: ()=> void;
};
const ConfirmModal = ({children,
  OnConfirm}:ConfirmModalProps) =>{
  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement,MouseEvent>) =>
  {
    e.stopPropagation();
    OnConfirm();

  };
  return (
   <AlertDialog>
     <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
          {children}
     </AlertDialogTrigger>
     <AlertDialogContent aria-label="Delete item">
       <AlertDialogHeader>
       <AlertDialogTitle>
          Are you sure?
        </AlertDialogTitle>
        <AlertDialogDescription>
            This action can not be undone.
        </AlertDialogDescription>
       </AlertDialogHeader>
       <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            Confirm
          </AlertDialogAction>
       </AlertDialogFooter>
     </AlertDialogContent>
   </AlertDialog>
  )
}

export default ConfirmModal
