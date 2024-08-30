"use client"

import CardList from "@/components/cardList";
import { useEffect, useState } from "react";
import sampleDataSource, { DataSourceItem } from "./api/constants/data";
import { Col, Divider, Input, Row } from "antd";

export default function Home() {

    const [source, setSource] = useState<DataSourceItem[]>(sampleDataSource);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        if (query === "") {
            setSource(sampleDataSource);
        } else {
            const temp: DataSourceItem[] = sampleDataSource
                .filter(doc =>
                    doc.name.toLowerCase().includes(query.toLowerCase()) ||
                    doc.description.toLowerCase().includes(query.toLowerCase())
                ).map(doc => ({
                    ...doc,
                    name: highlightCharacters({ text: doc.name, query }),
                    description: highlightCharacters({ text: doc.description, query }),
                }));

            setSource(temp);
        }
    }, [query]);

    return (
        <>
            <Divider />

            <Row style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col span={12}>
                    <Input.Search
                        placeholder="Search text"
                        onChange={(val) => {
                            setQuery(val.currentTarget.value);
                        }}
                    />
                </Col>
            </Row>

            <Divider />

            <CardList data={source} />
        </>
    );
}

function highlightCharacters({ text, query }: { text: string, query: string }) {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === query.toLowerCase() ? (
                    <mark key={i}>{part}</mark>
                ) : (
                    part
                )
            )}
        </>
    );
}
