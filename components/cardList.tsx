/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './CardList.module.css';
import sampleDataSource, { DataSourceItem } from '@/app/api/constants/data';

const CardList = ({ data }: { data?: DataSourceItem[] }) => {

    const docs = data ?? sampleDataSource;

    return (
        <div className={styles.cardContainer}>
            {docs.map(item => (
                <div key={item.id} className={styles.card}>
                    <img src={item.image} alt={""} className={styles.cardImage} />
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>{item.name}</h2>
                        <p className={styles.cardDescription}>{item.description}</p>
                        <p className={styles.cardTimestamp}>{item.timestamp}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardList;
