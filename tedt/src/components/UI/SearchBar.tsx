
import {
  IonButton,
  IonButtons,
  IonCardContent,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import {
  searchCircle,
  searchOutline,
  trash,
  trashBin,
  trashBinOutline,
} from 'ionicons/icons';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SearchBar = () => {
 

  return (
    <>
      {/* <IonSearchbar
        onChange={(e) =>
          filterProduct(e.target.value) || sortCategoryProducts(e.target.value)
        }
        onClick={(e) => filterProduct(e.target.value)}
        showCancelButton="always"
        cancelButtonText="Delete"
        cancelButtonIcon={trash}
        placeholder="Search"
        searchIcon={searchOutline}
        name="search"
      ></IonSearchbar> */}
      <div className="bg-gray-100 justify-between flex h-12 w-full border-l-0 border-r-0 border-t-0  border-b-2 border-b-slate-300  p-0.5 rounded-lg   mb-1 mt-2">
        <input
          onChange={(e) =>
            filterProduct(e.target.value) ||
            sortCategoryProducts(e.target.value) ||
            filterContacts(e.target.value)
          }
          onClick={(e) =>
            filterProduct(e.target.value) || filterContacts(e.target.value)
          }
          placeholder="Search"
          className="bg-gray-100 rounded-lg w-full focus:outline-none p-0"
        />

        <IonButtons
          fill="clear"
          size="default"
          color={'primary'}
          className="flex justify-center items-center h-full"
        >
          {' '}
          <IonButton lines="">
            <IonSelect aria-label="wear" placeholder="">
              <IonSelectOption
                value="shirt"
                onChange={(e) =>
                  filterProduct(e.target.value) ||
                  sortCategoryProducts(e.target.value)
                }
                onClick={(e) => filterProduct(e.target.value)}
              >
                Shirt
              </IonSelectOption>
              <IonSelectOption
                value="suit"
                onChange={(e) =>
                  filterProduct(e.target.value) ||
                  sortCategoryProducts(e.target.value)
                }
                onClick={(e) => filterProduct(e.target.value)}
              >
                Suit
              </IonSelectOption>
              <IonSelectOption
                value="trouser"
                onChange={(e) =>
                  filterProduct(e.target.value) ||
                  sortCategoryProducts(e.target.value)
                }
                onClick={(e) => filterProduct(e.target.value)}
              >
                Trouser
              </IonSelectOption>
            </IonSelect>
          </IonButton>
          <IonButton onClick={searchaAll}>
            <IonIcon icon={searchOutline} size="medium" className="" />
          </IonButton>
          <IonButton onClick={(e) => filterProduct(e.target.value)}>
            <IonIcon icon={trashBinOutline} size="medium" className="" />
          </IonButton>
        </IonButtons>
      </div>
    </>
  );
};

export default SearchBar;
