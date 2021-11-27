import React, {useEffect, useState} from 'react';
import BackNavLink from "../../../components/backNavLink/backNavLink";
import {categoryModel} from "../../../redux/models/categoryModel";
import axios from "axios";
import {CategoryURL} from "../../../URLS/URL";
import './categoryListAdmin.scss'
import {Button, Input, Spin} from "antd";
import {openNotificationWithIcon} from "../../../components/Notification/Notification";
import CategoryItemAdmin from "./CategoryItemAdmin/CategoryItemAdmin";

const CategoryListAdmin = () => {

    const [categories, setCategories] = useState<categoryModel[]>([])
    const [link, setLink] = useState<string>('')
    const [photo, setPhoto] = useState<string>('')
    const [activeSpin, setActiveSpin] = useState<boolean>(false);
    useEffect(() => {
        axios.get(`${CategoryURL}`).then(
            (res) => {
                setCategories(res.data.categories);
            }
        )
    }, [categories])

    const addCategory = async () => {
        setActiveSpin(true);
        await axios.post(`${CategoryURL}`, {category: link, photo: photo}).then(
            () => {
                setActiveSpin(false);
                openNotificationWithIcon("success", "Успех", "Категория была добавлена")
                setCategories([...categories, {link, photo}]);
            }
        ).catch(
            () => {
                setActiveSpin(false);
                openNotificationWithIcon("error", "Провал", "Категория не добавлена")
            }
        )
    }
    const deleteCategory = async (id: string|undefined) => {
        setActiveSpin(true);
        await axios.delete(`${CategoryURL}/${id}`).then(
            () => {
                setActiveSpin(false);
                openNotificationWithIcon("success", "Успех", "Категория была удалена")
                setCategories(categories.filter(t => t._id !== id))
            }
        ).catch(
            ()=> {
                setActiveSpin(false);
                openNotificationWithIcon("error", "провал", "Категория не  была удалена")
            }
        )
    }

    return (
        <div style={{width: '100%', height: "100%"}}>
            <BackNavLink/>
            <div style={{fontSize:"24px"}}>Список Категорий</div>
            <div className={"cAdminBlock"}>
                <div className={"CAList"}>
                    {
                        categories.length && categories.map((category: categoryModel) => {
                            return (
                                <CategoryItemAdmin deleteCategory={deleteCategory}  category={category}/>
                            )
                        })
                    }
                </div>
                <div className={"CAAddToList"}>
                    <h2>Добавление категории</h2>
                    <div className={"CAAddToList_form"}>
                        <Input style={{marginBottom: "20px"}} value={link}
                               onChange={e => setLink(e.currentTarget.value)}
                               placeholder={"Название"}/>
                        <Input style={{marginBottom: "20px"}} value={photo}
                               onChange={e => setPhoto(e.currentTarget.value)}
                               placeholder={"Фотография"}/>
                        {
                            activeSpin && <Spin/>
                        }
                        <Button onClick={() => addCategory()} type={"primary"} danger={true}>Добавить категорию</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryListAdmin;
