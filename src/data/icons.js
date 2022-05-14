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
import { AiOutlineEye } from 'react-icons/ai'
import { BiRun } from 'react-icons/bi';

export const icons = {
  menu_icon: <RiMenu3Line className="icon" />,
  close_icon: <RiCloseLine className="icon" />,
  search_icon: <RiSearchLine className="icon" />,
  wood_icon: <GiWoodPile className="icon" />, 
  gold_icon: <GiGoldBar className="icon" />, 
  time_icon: <GiSandsOfTime className="icon" />, 
  reload_icon: <IoReloadOutline className="icon" />, 
  attack_delay_icon: <GiSwordSpin className="icon" />, 
  move_icon: <BiRun className="icon" />, 
  vision_icon: <AiOutlineEye className="icon" />, 
  hit_icon: <GiPointySword className="icon" />, 
  attack_icon: <GiCrossedSwords className="icon" />, 
  range_icon: <GiObservatory className="icon" />, 
  armor_icon: <GiShoulderArmor className="icon" />, 
  target_icon: <GiHumanTarget className="icon" />, 
  food_icon: <GiCow className="icon" />, 
  age_icon: <GiExtraTime className="icon" />, 
  expansion_icon: <GiEvilBook className="icon" />, 
  castle_icon: <GiCastle className="icon" />, 
  bonus_icon: <GiPodiumWinner className="icon" />, 
}