import { RiMenu3Line, RiSearchLine, RiCloseLine } from 'react-icons/ri';
import { 
  GiWoodPile,
  GiGoldBar,
  GiSandsOfTime,
  GiSwordSpin,
  GiPointySword,
  GiCrossedSwords,
  GiObservatory,
  GiShoulderArmor,
  GiHumanTarget,
  GiCow,
  GiExtraTime,
  GiEvilBook,
  GiCastle,
  GiPodiumWinner
 } from 'react-icons/gi';
import { IoReloadOutline } from 'react-icons/io5';
import { AiOutlineEye, AiOutlineRight } from 'react-icons/ai'
import { BiRun, BiLike } from 'react-icons/bi';

export const icons = {
  menu_icon: <RiMenu3Line className="icon" />,
  close_icon: <RiCloseLine className="icon" />,
  search_icon: <RiSearchLine className="icon" />,
  wood_icon: <GiWoodPile className="icon food" />, 
  gold_icon: <GiGoldBar className="icon gold" />, 
  time_icon: <GiSandsOfTime className="icon time" />, 
  reload_icon: <IoReloadOutline className="icon reload" />, 
  attack_delay_icon: <GiSwordSpin className="icon atack--delay" />, 
  move_icon: <BiRun className="icon move" />, 
  vision_icon: <AiOutlineEye className="icon vision" />, 
  hit_icon: <GiPointySword className="icon hit" />, 
  attack_icon: <GiCrossedSwords className="icon attack" />, 
  range_icon: <GiObservatory className="icon range" />, 
  armor_icon: <GiShoulderArmor className="icon armor" />, 
  target_icon: <GiHumanTarget className="icon target" />, 
  food_icon: <GiCow className="icon food " />, 
  age_icon: <GiExtraTime className="icon age" />, 
  expansion_icon: <GiEvilBook className="icon expansion" />, 
  castle_icon: <GiCastle className="icon castle" />, 
  bonus_icon: <GiPodiumWinner className="icon bonus" />, 
  like_icon: <BiLike className="icon bonus" />, 
  next_icon: <AiOutlineRight className="icon bonus" />, 
}