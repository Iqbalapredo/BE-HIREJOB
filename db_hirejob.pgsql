--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: recruiters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recruiters (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    company character varying(255),
    department character varying(255),
    phone character varying(255),
    business character varying(255),
    city character varying(255),
    linkedin character varying(255),
    instagram character varying(255),
    photo character varying(255),
    description character varying(255),
    password character varying(255),
    level character varying(255) NOT NULL
);


ALTER TABLE public.recruiters OWNER TO postgres;

--
-- Name: recruiters_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recruiters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recruiters_id_seq OWNER TO postgres;

--
-- Name: recruiters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recruiters_id_seq OWNED BY public.recruiters.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    password character varying(255),
    photo character varying(255),
    phone character varying(255),
    job character varying(255),
    instagram character varying(255),
    skil character varying(255),
    github character varying(255),
    gitlab character varying(255),
    porto character varying(255),
    description character varying(255),
    city character varying(255),
    titleporto character varying(255),
    link character varying(255),
    type character varying(255),
    imageporto character varying(255),
    titlejob character varying(255),
    company character varying(255),
    datein character varying(255),
    dateout character varying(255),
    descriptionjob character varying(255),
    imagejob character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: recruiters id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recruiters ALTER COLUMN id SET DEFAULT nextval('public.recruiters_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: recruiters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recruiters (id, name, email, company, department, phone, business, city, linkedin, instagram, photo, description, password, level) FROM stdin;
2	Hmi Cabang Padang	hmi@mail	PT. Insan Cita	undefined	874923	Perkaderan	Padang	@hmiyakusa	@hmiPadang	20211230_183204-5122022192346.jpg	Kami adalah organisasi aktivis mahasiswa	$2b$10$E5B/bSCtbNFFuWbllECCveYLUtBY/PBazWRZTtF7uQXzEX46n7s3.	0
3	PT.Abadi Tech	abadi@mail	PT.Abadi Tech	CEO	734627	\N	\N	\N	\N	default.png	\N	$2b$10$E2JMoJWVC7FjEsQCwaHQtOfq7p/yHE59HNtA.ThkQ2kuF2qHJViQa	0
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, photo, phone, job, instagram, skil, github, gitlab, porto, description, city, titleporto, link, type, imageporto, titlejob, company, datein, dateout, descriptionjob, imagejob) FROM stdin;
1	Muhamad Iqbal Aprido	iqbal@mail	$2b$10$zN5WyroOAlSzR67/rlJ7hOlZ7FPau9ng91QxUePkqLJUlcNO0NfNq	image-12122022134914.jpg	394823	Programmer	@preedok	php	edo.git	edo.lab	undefined	saya adalah edo	Jambi	ankasa ticketing	ww.github.com/edo	ticket online	default.png	Back End Developer	PT. Insan Cita	Januari 2022 / Desember 2022	undefined	berpengalaman di bidang IT	default.png
2	Edo Dodo	edo@mail	$2b$10$Krrb3Kq4fP54lFf3Ym41HeoOmuY.rZ909YhDbedlucd2lZudBGQLq	top-161220229379.jpg	8475943	Marketing	@dodok	Management 	@ddodok	@gitlab edo	undefined	Saya adalah seorang marketer yang handal	Jambi	Grup App	ww.app.com	Diskusi	\N	HRD	PT.Suka Suka Saya	Desember 2020/ Desember2022	undefined	Menjalankan serta pengawasan karyawan yang bandel	\N
\.


--
-- Name: recruiters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recruiters_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: recruiters recruiters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recruiters
    ADD CONSTRAINT recruiters_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

