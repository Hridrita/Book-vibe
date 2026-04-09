import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../Components/ListedBooks/ListedReadList";
import ListWishList from "../../Components/ListedBooks/ListWishList";

const ListedBooks = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log(storedBooks, wishList);

  return (
    <div className="container mx-auto my-3">
      <h2></h2> <br />
      <h2></h2>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList></ListedReadList>
        </TabPanel>
        <TabPanel>
          <ListWishList></ListWishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
